import React, { ReactElement } from 'react'
import "../styles/global.css"
import { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />
}
