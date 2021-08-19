import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import reducers from '@/stores/reducers'
import LoadableCom from '../src/components/loadableCom'
import NotFound from '@/containers/Error/404'
import routes from '@/routes'
import './App.less'

// 增加middleware
const sagaMiddleware = createSagaMiddleware()
// 创建store
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware),
)
class App extends React.Component {
  render (): JSX.Element {
    return (
      <Provider store={store}>
        <Router
          basename="/application"
        >
          <Switch>
            <Route path="/" exact render={(): any => <Redirect to="/home" />} />
            {
              routes.map((route, i: number) => <Route key={i} exact={!route.notExact} path={route.path} component={(props: any): JSX.Element => <LoadableCom {...props} route={route} />} />)
          }
            <Route path="*" component={(props: any): any => <NotFound {...props} />} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
