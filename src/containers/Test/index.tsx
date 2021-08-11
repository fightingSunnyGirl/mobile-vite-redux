import React, { useState } from 'react'
import { Button } from 'antd-mobile'
import { withRouter, Link } from 'react-router-dom'
import Container from '@/components/container'
import styles from './index.module.less'

function Test () {
  const [pageName, setPageName] = useState('')
  if (Object.is(pageName, 'pagename')) {
    setPageName('测试页面')
  }

  return (
    <Container>
      <div>
        <p>测试页面</p>
        <p className={styles['test-p']}>firstName=== {pageName}</p>
        <Button size="large" type="ghost">测试按钮</Button>
        <Link to={{ pathname: '/home', query: { firstName: 1, lastName: 'ah' } }}> 返回首页传参方式一</Link>
        <Link to="/home?a=1&b=2"> 返回首页传参方式二</Link>
        <ul>
          <li>苹果</li>
          <li>桃子</li>
          <li>栗子</li>
        </ul>
      </div>
    </Container>
  )
}

export default withRouter(Test)
