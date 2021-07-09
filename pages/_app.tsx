import React, { ReactElement } from 'react'
import '../styles/global.css'
import Head from 'next/head'
import Router from 'next/router'
import { AppProps } from 'next/app'
import NProgress from 'nprogress'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../src/theme'

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function MyApp({
  Component,
  pageProps,
}: AppProps): ReactElement {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  )
}
