import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Order from "./modules/order/Order.screen";
import LoginPage from "./modules/login/screen/LoginPage.screen";
import ForgotPassword from "./modules/forgotPassword/ForgotPassword.screen";

function RouterComponent() {
  return (
    <Router>
      <Switch>
        <Route exact path="/order" ><Order /> </Route>
        <Route exact path="/forgotPassword" ><ForgotPassword /> </Route>
        <Route exact path="/" ><LoginPage /> </Route>
      </Switch>
    </Router>
  );
}

export default RouterComponent;
