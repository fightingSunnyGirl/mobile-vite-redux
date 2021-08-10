import React, { useState } from 'react'
import styles from './index.module.less'

function App () {
  const [pageName, setPageName] = useState('')
  if (Object.is(pageName, 'pagename')) {
    setPageName('测试页面')
  }

  return (
    <div className="App">
       <header className={styles['App-header']}>
      <p>测试页面</p>
      <p>firstName=== {pageName}</p>
      </header>
    </div>
  )
}

export default App
