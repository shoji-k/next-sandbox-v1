import React, { ReactElement } from 'react'
import Link from 'next/link'
import styles from './layout.module.css'

export const siteName = 'Sample site'

function Layout({
  children,
  home,
}: {
  children: React.ReactNode
  home?: boolean
}): ReactElement {
  return (
    <div className={styles.container}>
      {children}
      {!home && (
        <div className="pt-6 text-indigo-500 text-center">
          <Link href="/">back to top</Link>
        </div>
      )}
    </div>
  )
}

export default Layout
