import React, { ReactElement } from "react"
import Text from "./organisms/sample-form/Text"
import Label from "./organisms/sample-form/Label"
import Password from "./organisms/sample-form/Password"

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
          <Text id="grid-password" placeholder="******************" />
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
          <div className="relative">
            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <Label inputId="grid-zip">Zip</Label>
          <Text id="grid-zip" placeholder="90210" />
        </div>
      </div>
    </form>
  )
}
