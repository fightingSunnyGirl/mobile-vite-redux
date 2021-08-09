import React, { useState } from 'react'
import { Button } from 'antd-mobile'
import styles from './App.module.less'

function App () {
  const [count, setCount] = useState(0)
  const P = new Promise((resolve, reject) => {
    resolve(count)
  })

  return (
    <div className="App">
      <header className={styles['App-header']}>
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount(count => count + 1)}>
            count is: {count}
          </button>
        </p>
      <p className={styles['test-p']}>{Array.isArray(P) ? '是' : '否'}</p>
      <Button type="primary" size="small" inline>small</Button>
      </header>
    </div>
  )
}

export default App
