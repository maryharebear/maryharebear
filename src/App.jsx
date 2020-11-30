import './App.css';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import { createHashHistory } from 'history';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import Contact from './pages/Contact/Contact'


const history = createHashHistory({
  basename: '',
  hashType: 'noslash',
  getUserConfirmation: (message, callback) => callback(window.confirm(message)),
});
function App() {
  return (
    <Router history={history}> 
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/aboutme" component={AboutMe}/>
        <Route exact path="/contact" component={Contact}/>
      </Switch>
    </Router>
  );
}

export default App;
