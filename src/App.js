import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import House from './House';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' component={House} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
