import {
  HashRouter as Router,
  Redirect,
  Route,
} from 'react-router-dom'

import Home from './pages/Home'
import Pokemon from './pages/Pokemon'

const App = (): JSX.Element => (
  <Router>
    <Route exact path="/pokemon" component={Home} />
    <Route path="/pokemon/:id" component={Pokemon} />
    <Redirect to="/pokemon" />
  </Router>
)

export default App
