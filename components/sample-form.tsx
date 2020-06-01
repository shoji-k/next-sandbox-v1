import React, { ReactElement, useState } from "react"
import Label from "./organisms/sample-form/Label"
import Password from "./organisms/sample-form/Password"
import Select from "./organisms/sample-form/Select"
import TextLabel from "./organisms/sample-form/TextLabel"

export default function SampleForm(): ReactElement {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [zip, setZip] = useState('')

  return (
    <form className="w-full max-w-lg mx-auto py-8">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <TextLabel
            id="grid-first-name"
            value={firstName}
            setText={setFirstName}
            placeholder="Jane"
            error="Please fill out this field."
          >First Name</TextLabel>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <TextLabel
            id="grid-last-name"
            value={lastName}
            setText={setLastName}
            placeholder="Doe"
          >Last Name</TextLabel>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <Label inputId="grid-password">Password</Label>
          <Password id="grid-password" placeholder="******************" />
          <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you&apos;d like</p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <TextLabel id="grid-city" placeholder="Albuquerque">City</TextLabel>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <Label inputId="grid-state">State</Label>
          <Select
            id="grid-state"
            list={['New Mexico', 'Missouri', 'Texas']}
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <TextLabel
            id="grid-zip"
            value={zip}
            setText={setZip}
            placeholder="90210"
          >Zip</TextLabel>
        </div>
      </div>
    </form>
  )
}
