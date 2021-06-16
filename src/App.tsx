import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from 'react-router-dom'

import Login from './pages/Login'
import Home from './pages/Home'
import Pokemon from './pages/Pokemon'
import Bookmarks from './pages/Bookmarks'

const Routes = (): JSX.Element => {
  const { replace } = useHistory()
  const atLogin = useRouteMatch('/login')
  const session = localStorage.getItem('session_id')

  if(!session && !atLogin) {
    replace('/login')
  }

  return (
    <Switch>
      <Route path="/bookmarks" component={Bookmarks} />
      <Route exact path="/pokemons" component={Home} />
      <Route exact path="/pokemons/:id" component={Pokemon} />
      <Route path="/login" component={Login} />
      <Redirect to="/pokemons" />
    </Switch>
  )
}

const App = (): JSX.Element => (
  <Router>
    <Routes />
  </Router>
)

export default App
