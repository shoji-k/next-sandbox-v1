import React, { ReactElement } from 'react'
import { useForm, ErrorMessage } from 'react-hook-form'
import Label from './organisms/sample-form/Label'
import Password from './organisms/sample-form/Password'
import Select from './organisms/sample-form/Select'
import TextLabel from './organisms/sample-form/TextLabel'

export default function SampleForm(): ReactElement {
  const { register, errors, handleSubmit, formState} = useForm<FormData>()
  const onSubmit = (data: {}): void => console.log('submit:', data, formState)

  return (
    <form className="w-full max-w-lg mx-auto py-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <TextLabel
            id="grid-first-name"
            placeholder="Jane"
            register={register}
            error={!!errors["grid-first-name"]}
          >
            First Name
          </TextLabel>
          <ErrorMessage errors={errors} name="grid-first-name" />
          {errors["grid-first-name"] && (
            <p className="text-red-500 text-xs italic">required</p>
          )}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <TextLabel
            id="grid-last-name"
            placeholder="Doe"
            register={register}
            error={!!errors["grid-last-name"]}
          >
            Last Name
          </TextLabel>
          {errors["grid-last-name"] && (
            <p className="text-red-500 text-xs italic">required</p>
          )}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <Label inputId="grid-password">Password</Label>
          <Password
            id="grid-password"
            placeholder="******************"
            register={register}
            error={!!errors["grid-password"]}
          />
          <ErrorMessage errors={errors} name="grid-password" />
          {errors["grid-password"] && (
            <p className="text-red-500 text-xs italic">input more than 5 characters</p>
          )}
          <p className="text-gray-600 text-xs italic">
            Make it as long and as crazy as you&apos;d like
          </p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <TextLabel
            id="grid-city"
            placeholder="Albuquerque"
            register={register}
            error={!!errors["grid-city"]}
          >
            City
          </TextLabel>
          {errors["grid-city"] && (
            <p className="text-red-500 text-xs italic">required</p>
          )}
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <Label inputId="grid-state">State</Label>
          <Select
            id="grid-state"
            list={['', 'New Mexico', 'Missouri', 'Texas']}
            register={register}
            error={!!errors["grid-state"]}
          />
          {errors["grid-state"] && (
            <p className="text-red-500 text-xs italic">required</p>
          )}
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <TextLabel
            id="grid-zip"
            placeholder="90210"
            register={register}
            error={!!errors["grid-zip"]}
          >
            Zip
          </TextLabel>
          {errors["grid-zip"] && (
            <p className="text-red-500 text-xs italic">required</p>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Save" />
      </div>
    </form>
  )
}