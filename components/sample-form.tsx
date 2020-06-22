import React, { ReactElement } from 'react'
import { useForm, ErrorMessage } from 'react-hook-form'
import Label from './organisms/sample-form/Label'
import Password from './organisms/sample-form/Password'
import Select from './organisms/sample-form/Select'
import TextLabel from './organisms/sample-form/TextLabel'
import { Alert } from './atoms/Alert'

type AlertMessageArguments = Readonly<{ errors: string[], name: string}>
const AlertMessage = ({ errors, name }: AlertMessageArguments): React.ReactElement => {
  return (<ErrorMessage errors={errors} name={name}>
    {({ message }: { message: string }): React.ReactElement => (
      <Alert>{message}</Alert>
    )}
  </ErrorMessage>)
}

const Submit = (): React.ReactElement => {
  return (
    <input
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
      value="Save"
    />
  )
}

export default function SampleForm(): ReactElement {
  const { register, errors, handleSubmit, formState } = useForm<FormData>()
  const onSubmit = (data: {}): void => console.log('submit:', data, formState)

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
          <AlertMessage errors={errors} name="grid-first-name" />
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
          <AlertMessage errors={errors} name="grid-last-name" />
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
          <AlertMessage errors={errors} name="grid-password" />
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
            error={!!errors['grid-city']}
          >
            City
          </TextLabel>
          <AlertMessage errors={errors} name="grid-city" />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <Label inputId="grid-state">State</Label>
          <Select
            id="grid-state"
            list={['', 'New Mexico', 'Missouri', 'Texas']}
            register={register}
            error={!!errors['grid-state']}
          />
          <AlertMessage errors={errors} name="grid-state" />
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
          <AlertMessage errors={errors} name="grid-zip" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Submit />
      </div>
    </form>
  )
}
