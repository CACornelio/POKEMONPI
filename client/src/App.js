import './App.css';
import {Route, BrowserRouter, Switch, useLocation} from "react-router-dom"
import Home from './Views/Home/Home';
import landingPage from './Views/LandingPage/landingPage';
import CreateForm from './Views/Create/CreateForm';
import Details from './Views/Details/Details';
import NavBar from './Components/NavBar/NavBar';
function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
    <h1>POKEDEX</h1>
    <Route path="/" exact component={landingPage} />
<Route
  path={["/home", "/create", "/details/:id"]}
  render={() => <NavBar />}
/>
      <Switch>
       
     <Route path="/home" component ={Home} />
     {/* <Route exact path="/" component ={landingPage} /> */}
     <Route path="/create" component ={CreateForm} />
     <Route path="/details/:id" component ={Details} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
