import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import CreatePostForm from "./components/CreatePostPage";
import Dashboard from "./components/DashboardPage";
import Profile from "./components/Profile";
import HomePage from "./components/HomePage";
import * as sessionActions from "./store/session";


function App() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/new/text">
            <CreatePostForm />
          </Route>
          <Route path="/new/image">
            <CreatePostForm />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          {sessionUser && (
            <>
              <Route path={`/${sessionUser.username}/posts`}>
                <Profile />
              </Route>
            </>
          )}
        </Switch>
      )}
    </>
  );
}


export default App;
