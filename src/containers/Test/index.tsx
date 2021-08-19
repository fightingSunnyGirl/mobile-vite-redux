import React, { useState } from 'react'
import { Button } from 'antd-mobile'
import { withRouter, Link } from 'react-router-dom'
import { useSelector/*, useDispatch */ } from 'react-redux'
import Container from '@/components/container'
import styles from './index.module.less'
import { sagaTets } from '@/stores/sagas'

function Test () {
  const [pageName, setPageName] = useState('')
  if (Object.is(pageName, 'pagename')) {
    setPageName('测试页面')
  }
  // const dispatch = useDispatch()
  const testData = useSelector((state:Project.General.IAnyObject) => state.testData)
  // 异步
  const handleClick = () => {
    sagaTets('修改后的数据')
  }

  return (
    <Container>
      <div>
        <p>测试页面</p>
        <p className={styles['test-p']}>firstName=== {pageName}</p>
        <Button size="large" type="ghost" onClick={handleClick}>修改redux数据</Button>
        <p>我是测试的redux testData = {testData}</p>
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
