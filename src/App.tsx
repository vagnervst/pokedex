import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

import Home from './pages/Home'
import Pokemon from './pages/Pokemon'
import Bookmarks from './pages/Bookmarks'

const App = (): JSX.Element => (
  <Router>
    <Switch>
      <Route path="/bookmarks" component={Bookmarks} />
      <Route exact path="/pokemon" component={Home} />
      <Route exact path="/pokemon/:id" component={Pokemon} />
      <Redirect to="/pokemon" />
    </Switch>
  </Router>
)

export default App
