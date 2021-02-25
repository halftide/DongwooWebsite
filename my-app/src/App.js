import logo from './logo.svg';
import './App.css';
import NavBar from './navBar'

import HOME from './page/Home'
import Page1 from './page/Page1'
import Page2 from './page/Page2'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
    
      <Switch>
        <Route path ="/" component ={HOME} exact/>
        {/* Page 1 is for Roulette */}
        <Route path ="/page1" component ={Page1} exact/>
   
        {/* Page 2 is for somthing (not decided yet) */}
          <Route path ="/page2" component ={Page2} exact/>

        {/* Add yourself */}

     </Switch>
  
  </BrowserRouter>

  );
}

export default App;
