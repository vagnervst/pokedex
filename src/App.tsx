import {
  HashRouter as Router,
  Route,
} from 'react-router-dom'

import Home from './pages/Home'

const App = (): JSX.Element => (
  <Router>
    <Route path="/home" component={Home} />
  </Router>
)

export default App
