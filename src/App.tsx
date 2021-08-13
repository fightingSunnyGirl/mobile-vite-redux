import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import LoadableCom from '../src/components/loadableCom'
import NotFound from '@/containers/Error/404'
import routes from '@/routes'
import './App.less'

class App extends React.Component {
  render (): JSX.Element {
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={(): any => <Redirect to="/home" />} />
          {
              routes.map((route, i: number) => <Route key={i} exact={!route.notExact} path={route.path} component={(props: any): JSX.Element => <LoadableCom {...props} route={route} />} />)
          }
          <Route path="*" component={(props: any): any => <NotFound {...props} />} />
        </Switch>
      </Router>
    )
  }
}

export default App
