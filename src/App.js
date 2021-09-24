import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { renderRouteAdmin, renderRouteHome } from "./routes/index"
import PageNotFound from "./containers/PageNotFound"
import Navbar from './containers/HomeTemplate/_components/Navbar/Navbar';
import NavbarAdmin from './containers/AdminTemplate/_components/Navbar/Navbar';

import Footer from './containers/HomeTemplate/_components/Footer/Footer';
function App() {
  return (
    <BrowserRouter>
      {/* <Navbar />
      <NavbarAdmin /> */}
      <Switch>
        {renderRouteHome()}
        {renderRouteAdmin()}
        <Route path="*" component={PageNotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
