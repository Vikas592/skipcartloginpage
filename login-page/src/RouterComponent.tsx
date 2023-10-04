import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Order from "./modules/order/Order.screen";
import LoginPage from "./modules/login/screen/LoginPage.screen";
import ForgotPassword from "./modules/forgotPassword/ForgotPassword.screen";

function RouterComponent() {
  return (
    <Router>
      <Switch>
        <Route path="/order" ><Order /> </Route>
        <Route path="/" ><LoginPage /> </Route>
        <Route path="/forgotPassword" ><ForgotPassword /> </Route>
      </Switch>
    </Router>
  );
}

export default RouterComponent;
