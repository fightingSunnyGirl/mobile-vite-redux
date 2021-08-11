import React from 'react'
import loadable from '@loadable/component'
const modules = import.meta.glob('../containers/*/*.tsx')

function LoadableCom (props: Project.General.IAnyObject): JSX.Element {
  const component = `/containers${props.route.component}/`
  const LoadableBar: any = loadable(async () => {

    try {
    // 路由动态导入
      for (const path in modules) {
        if (path.indexOf(component) !== -1) {
          return modules[path]()
        }
      }
    } catch (error) {
      return import('../containers/Error/404')
    }

  })

  return <LoadableBar />
}

export default LoadableCom
