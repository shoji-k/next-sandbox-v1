import React, { useState, ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import { fetchPost } from '@/lib/fetch'
import Label from '@/components/organisms/sample-form/Label'
import Password from '@/components/organisms/sample-form/Password'
import Select from '@/components/organisms/sample-form/Select'
import TextLabel from '@/components/organisms/sample-form/TextLabel'
import { Alert } from '@/components/atoms/Alert'
import { Submit } from '@/components/atoms/Submit'

export default function SampleForm(): ReactElement {
  const [saving, setSaving] = useState(false)
  const { register, errors, handleSubmit } = useForm<FormData>()
  const onSubmit = async (data: {}): Promise<void> => {
    try {
      setSaving(true)
      await fetchPost('/api/form', data)
      setSaving(false)
    } catch {
      alert('Save errors happen')
    }
  }

  return (
    <form
      className="w-full max-w-lg mx-auto py-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <TextLabel
            id="grid-first-name"
            placeholder="Jane"
            register={register}
            error={!!errors['grid-first-name']}
          >
            First Name
          </TextLabel>
          <Alert error={errors['grid-first-name']?.message} />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <TextLabel
            id="grid-last-name"
            placeholder="Doe"
            register={register}
            error={!!errors['grid-last-name']}
          >
            Last Name
          </TextLabel>
          <Alert error={errors['grid-last-name']?.message} />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <Label inputId="grid-password">Password</Label>
          <Password
            id="grid-password"
            placeholder="******************"
            register={register}
            error={!!errors['grid-password']}
          />
          <Alert error={errors['grid-password']?.message} />
          <p className="text-gray-600 text-xs italic">
            Make it as long and as crazy as you&apos;d like
          </p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <TextLabel
            id="grid-city"
            placeholder="Albuquerque"
            register={register}
            error={!!errors['grid-city']}
          >
            City
          </TextLabel>
          <Alert error={errors['grid-city']?.message} />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <Label inputId="grid-state">State</Label>
          <Select
            id="grid-state"
            list={['', 'New Mexico', 'Missouri', 'Texas']}
            register={register}
            error={!!errors['grid-state']}
          />
          <Alert error={errors['grid-state']?.message} />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <TextLabel
            id="grid-zip"
            placeholder="90210"
            register={register}
            error={!!errors['grid-zip']}
          >
            Zip
          </TextLabel>
          <Alert error={errors['grid-zip']?.message} />
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
