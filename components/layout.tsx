import React, { ReactElement } from 'react'
import styles from './layout.module.css'

function Layout({ children }: { children: React.ReactNode }): ReactElement {
  return <div className={styles.container}>{children}</div>
}

export default Layout
