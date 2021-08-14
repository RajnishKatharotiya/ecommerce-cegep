import Landing from './Components/Landing';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from './Components/Authentication/Singin';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signin" component={Signin} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
