import React, { ReactElement } from "react"
import Label from "./organisms/sample-form/Label"
import Password from "./organisms/sample-form/Password"
import Select from "./organisms/sample-form/Select"
import Text from "./organisms/sample-form/Text"

export default function SampleForm(): ReactElement {
  return (
    <form className="w-full max-w-lg mx-auto py-8">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <Label inputId="grid-first-name">First Name</Label>
          <Text id="grid-first-name" placeholder="Jane" error="Please fill out this field." />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <Label inputId="grid-last-name">Last Name</Label>
          <Text id="grid-last-name" placeholder="Doe" />
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
          <Label inputId="grid-city">City</Label>
          <Text id="grid-city" placeholder="Albuquerque" />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <Label inputId="grid-state">State</Label>
          <Select
            id="grid-state"
            list={['New Mexico', 'Missouri', 'Texas']}
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <Label inputId="grid-zip">Zip</Label>
          <Text id="grid-zip" placeholder="90210" />
        </div>
      </div>
    </form>
  )
}
