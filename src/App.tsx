import './App.css';
import { LockScreen } from './components/lock_screen/lock_screen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <LockScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
