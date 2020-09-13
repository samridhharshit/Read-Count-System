import React from 'react';
import './App.css';
import {HashRouter as Router, Switch, Route, Redirect} from "react-router-dom";


import Signup from "./modules/auth/signup";
import Login from "./modules/auth/login";
import ReadStory from "./modules/story/readStory";
import StoriesCollection from "./modules/story/storiesCollection";
// import withAuth from "./Components/WithAuth";
// import AlreadyAuthenticated from "./Components/AlreadyAuthenticated";
// import Dummy from "./Components/dummy";
// import UploadImage from "./Components/UploadImage";
// import PreLoginNavigation from "./Components/PreLoginNavigation";
// import UserDisplay from "./Components/UserDisplay";

function App() {
  return (
      <div className={'container'}>
          <Router>
              <Switch>
                  <Route exact path="/" component={Signup} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/story" component={ReadStory} />
                  <Route eaxt path="/storiesList" component={StoriesCollection} />
                  <Redirect to={'/'} />
              </Switch>
          </Router>
      </div>

  );
}

export default App;
