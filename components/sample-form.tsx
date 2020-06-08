import React, { ReactElement, useState } from 'react'
import { useForm } from 'react-hook-form'
import Label from './organisms/sample-form/Label'
import Password from './organisms/sample-form/Password'
import Select from './organisms/sample-form/Select'
import TextLabel from './organisms/sample-form/TextLabel'

export default function SampleForm(): ReactElement {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [city, setCity] = useState('')
  const [state, selectState] = useState('')
  const [zip, setZip] = useState('')

  const { register, errors, handleSubmit } = useForm<FormData>()
  const onSubmit = (data: {}): void => console.log('submit:', data)
  console.log('errors:', errors)

  return (
    <form className="w-full max-w-lg mx-auto py-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <TextLabel
            id="grid-first-name"
            value={firstName}
            setText={setFirstName}
            placeholder="Jane"
            register={register}
            error={!!errors["grid-first-name"]}
          >
            First Name
          </TextLabel>
          {errors["grid-first-name"] && (
            <p className="text-red-500 text-xs italic">required</p>
          )}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <TextLabel
            id="grid-last-name"
            value={lastName}
            setText={setLastName}
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
            value={password}
            setPassword={setPassword}
            placeholder="******************"
            register={register}
            error={!!errors["grid-password"]}
          />
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
            value={city}
            setText={setCity}
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
            value={state}
            select={selectState}
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
            value={zip}
            setText={setZip}
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
