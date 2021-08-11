import React from 'react'
import { Icon } from 'antd-mobile'
export default function Index (): JSX.Element {
  return (
    <div className="components_loading">
      <Icon type="loading" className="icon" style={{ fill: '#108EE9' }} size="lg" />
      <p>loading...</p>
    </div>
  )
}
