import React, { useState } from 'react'
import logo from './logo.svg'
import styles from './App.module.less'

function App () {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount(count => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
      <p className={styles['test-p']}>侧二十</p>
      </header>
    </div>
  )
}

export default App
