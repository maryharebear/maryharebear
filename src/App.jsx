import './App.css';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import { createHashHistory } from 'history';
import Home from './pages/Home';


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
      </Switch>
    </Router>
  );
}

export default App;
