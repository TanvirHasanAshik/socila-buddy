import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Details from './Components/Details/Details';

function App() {
  return (
   <Router>
     <Switch>
       <Route path="/home">
          <Home/>
       </Route>
       <Route exact path="/">
         <Home/>
       </Route>
       <Route path="/post/:postId">
         <Details/>
       </Route>
       <Route path="*">
         <NotFound/>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
