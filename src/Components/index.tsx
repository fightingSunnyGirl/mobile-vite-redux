import React, { useState } from 'react'
import styles from './index.module.less'

function App () {
  const [firstName, setFirstName] = useState(0)
  if (Object.is(firstName, 0)) {
    setFirstName(1000)
  }

  return (
    <div className="App">
      <header className={styles['App-header']}>
      <p>Home页面</p>
      <p className={styles['test-p']}>home页面</p>
      <p>firstName=== {firstName}</p>
      </header>
    </div>
  )
}

export default App
