import React from 'react'
import { Icon } from 'antd-mobile'

function Index (props: Project.General.IAnyObject): JSX.Element {

  const { error } = props

  return (
    <div className="components_error">
      <Icon type="cross-circle-o" size="lg" className="icon" style={{ fill: '#F13642' }} />
      <p className="error_code">{error.code || -1}</p>
      <p className="error_sub">{error.msg || '>.< 攻城师开小差了～'}</p>
    </div>
  )
}

export default Index
