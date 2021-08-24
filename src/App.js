import Landing from './Components/Landing';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import ContactUs from './Components/ContactUs';
import Recipes from './Components/Recipes';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/recipes" component={Recipes} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
