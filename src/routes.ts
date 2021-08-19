// 路由
interface routeItem {
  path:string
  name:string
  component:string
  notExact?:boolean
}
type routesTypes = Array<routeItem>

const routes:routesTypes = [
  {
    path: '/home/:id?',
    name: '欢迎',
    component: '/Home',
  },
  {
    path: '/test',
    name: '测试',
    component: '/Test',
  },
]

export default routes
