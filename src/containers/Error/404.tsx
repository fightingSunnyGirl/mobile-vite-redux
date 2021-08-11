import React from 'react'
import { Result, Icon } from 'antd-mobile'

function Error404 () {
  return (
    <div>
      <Result
        img={<Icon type="cross-circle-o" style={{ fill: '#F13642' }} />}
        title="404"
        message="此页面未找到"
      />
    </div>
  )
}

export default Error404
