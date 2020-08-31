import React, { useState, ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import { fetchPost, fetchPut } from '@/lib/fetch'
import { user } from '@/lib/firebase/users'
import TextLabel from '@/components/organisms/sample-form/TextLabel'
import { Alert } from '@/components/atoms/Alert'
import { Clear } from '@/components/atoms/Clear'
import { Submit } from '@/components/atoms/Submit'
import { Toast } from '@/components/atoms/Toast'

export default function UserForm({
  addUser,
  selectedUser,
  updateUser,
}: {
  addUser: (user: user) => void
  selectedUser: user
  updateUser: (user: user) => void
}): ReactElement {
  const [userId, setUserId] = useState(null)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const { register, errors, handleSubmit, reset, setValue } = useForm<
    FormData
  >()
  const showToast = (message: string):void => {
    setMessage(message)
    setTimeout(setMessage, 2000, '')
  }

  const onSubmit = async (user: user): Promise<void> => {
    if (userId) {
      try {
        setSaving(true)
        const res = await fetchPut(`/api/users/${userId}`, {
          ...user,
          id: userId,
        })
        updateUser(res.data.user)
        showToast('Updated')
        reset()
        setUserId(null)
        return
      } catch (e) {
        console.log(e)
        alert('Update errors happen')
      } finally {
        setSaving(false)
      }
    }
    try {
      setSaving(true)
      const res = await fetchPost('/api/users', user)
      addUser({ id: res.data.id, ...user })
      showToast('Saved')
      reset()
    } catch (e) {
      console.log(e)
      alert('Save errors happen')
    } finally {
      setSaving(false)
    }
  }
  const clear = (): void => {
    reset()
    setUserId(null)
  }
  const set = (key: string, value: string): void => {
    setValue(key, value, {
      shouldValidate: true,
      shouldDirty: true,
    })
  }

  React.useEffect(() => {
    if (Object.keys(selectedUser).length !== 0) {
      setUserId(selectedUser.id)
      set('first', selectedUser.first)
      set('middle', selectedUser.middle)
      set('last', selectedUser.last)
    }
  }, [selectedUser])

  return (
    <form
      className="w-full max-w-lg mx-auto py-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <TextLabel
            id="first"
            placeholder="first name"
            register={register}
            error={!!errors['first']}
          >
            Name
          </TextLabel>
          <Alert error={errors['first']?.message} />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <TextLabel
            id="middle"
            placeholder="middle name"
            register={register}
            error={!!errors['middle']}
          >
            &nbsp;
          </TextLabel>
          <Alert error={errors['middle']?.message} />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <TextLabel
            id="last"
            placeholder="last name"
            register={register}
            error={!!errors['last']}
          >
            &nbsp;
          </TextLabel>
          <Alert error={errors['last']?.message} />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 mb-6 md:mb-0">
          <Submit disabled={saving} value={userId ? 'Update' : 'Save'} />{' '}
          {userId && <Clear onClick={clear} />}
        </div>
      </div>
      {message ? <Toast message={message} /> : null}
    </form>
  )
}
