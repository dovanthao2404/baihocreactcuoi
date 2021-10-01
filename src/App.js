import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { renderRouteAdmin, renderRouteHome } from "./routes/index";
import PageNotFound from "./containers/PageNotFound";

import Footer from "./containers/HomeTemplate/_components/Footer/Footer";
import AuthPage from "./containers/AuthPage";
function App() {
  return (
    <BrowserRouter>
      {/* <Navbar />
      <NavbarAdmin /> */}
      <Switch>
        {renderRouteHome()}
        {renderRouteAdmin()}
        <Route exact path="/auth" component={AuthPage} />
        <Route path="*" component={PageNotFound} />
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
