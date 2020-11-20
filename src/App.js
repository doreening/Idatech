import React from 'react';
// import logo from './logo.png';
import './App.css';
// import './Style.css';

import About from './components/About';
import Body from './components/Body';
import Signin from './components/Signin';

import Events from './components/Events';
import Donate from './components/Donate';
import Post from './components/admins/Post';
import Ambassador from './components/admins/Ambassador';

import Registers from './components/admins/Registers';
import Paypal from './components/Paypal';
import Register from './components/Register';
import Register1 from './components/Register1';
import Sermons from './components/Sermons';


import './css/tailwindcss.css';

//import Route in Dashboard

import Dash  from './components/admins/Dashboard';
import Addsermons from './components/admins/Addsermons';
import Users from './components/admins/Users';


import {
 BrowserRouter as Router,
 Switch,
 Route,
 Link
} from "react-router-dom";
import Signup from './components/Signup';
import Dashboard from './components/admins/Dashboard';
// import Totaluser from './components/admins/Totaluser';
import Userrequested from './components/admins/Posthome';
import Userposted from './components/admins/Userposted';

import Posthome from './components/admins/Posthome';



function App() {
  return (
    
    
    <Router>
      <Switch>

        <Route exact path="/">
          <Body />

        </Route>
        <Route path="/about-us">
          <About />
          
        </Route>

          <Route path="/user-signup">
          <Signup />
          
        </Route>

        <Route path="/signin">
          <Signin  />

        </Route>

          <Route path="/admin">
          <Dashboard  />

        </Route>
 <Route path="/register">
          <Register  />

        </Route>

        <Route path="/register1">
          <Register1  />
          
        </Route>
 <Route path="/sermons">
          <Sermons  />

        </Route>
        <Route path="/Dashboard">
          <Dashboard />

        </Route>
       <Route path="/Ambassador">
         <Ambassador />
       </Route>

        

        <Route path="/managesermons">
          <Addsermons />
        </Route>

        <Route path="/posthome">
         <Posthome />
        </Route>

        <Route path="/users">
          <Users />

          </Route>

        <Route path="/home">
          <Body />

        </Route>
        

        


      <Route path="/events">
          <Events  />

        </Route>
 <Route path="/donate">
          <Donate  />

        {/* </Route>
        <Route path="/post">
          <Post /> */}

        </Route>
        
 <Route path="/register">
          <Register />

        </Route>
        {/* <Route path="/paypal">
          <Paypal />

        </Route> */}

      </Switch>
    </Router>

  

  );
}

export default App;
