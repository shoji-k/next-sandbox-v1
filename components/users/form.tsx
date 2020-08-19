import React, { useState, ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import { create, user } from '@/lib/firebaseDatabase'
import TextLabel from '@/components/organisms/sample-form/TextLabel'
import { Alert } from '@/components/atoms/Alert'
import { Submit } from '@/components/atoms/Submit'

export default function UserForm(): ReactElement {
  const [saving, setSaving] = useState(false)
  const { register, errors, handleSubmit } = useForm<FormData>()
  const onSubmit = async (user: user): Promise<void> => {
    try {
      setSaving(true)
      console.log(user)
      const id = create(user)
      // addUser({ id, ...user })
      console.log('saved', id)
    } catch {
      alert('Save errors happen')
    } finally {
      setSaving(false)
    }
  }

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
          >&nbsp;</TextLabel>
          <Alert error={errors['middle']?.message} />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <TextLabel
            id="last"
            placeholder="last name"
            register={register}
            error={!!errors['last']}
          >&nbsp;</TextLabel>
          <Alert error={errors['last']?.message} />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 mb-6 md:mb-0">
          <Submit disabled={saving} />
        </div>
      </div>
    </form>
  )
}
