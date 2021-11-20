import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AppHeader from "./cmps/AppHeader";
import HomePage from "./pages/HomePage";
import Favorites from './pages/Favorites'
import AppFooter from "./cmps/AppFooter";
function App() {


  
  return (
    <Router>
        <AppHeader/>
        <Switch>
        <Route path="/favorites" component={Favorites} />
        <Route path="/" component={HomePage} />  
        </Switch>
        <AppFooter/>
    </Router>
  );
}
export default App

