import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { GameGuard } from "../routeProtectors/GameGuard";
import GameRouter from "./GameRouter";
import { LoginGuard } from "../routeProtectors/LoginGuard";
import Login from "../../login/Login";
import { StartPageGuard } from "../routeProtectors/StartPageGuard";
import StartPage from "../../startPage/StartPage";
import { RegisterGuard } from "../routeProtectors/RegisterGuard";
import Register from "../../register/Register";
import Home from "../../home/Home";
import Dashboard from "../../Dashboard/Dashboard";
import Profile from "../../profile/Profile";
import Board from "../../board/Board";

/**
 * Main router of your application.
 * In the following class, different routes are rendered. In our case, there is a Login Route with matches the path "/login"
 * and another Router that matches the route "/game".
 * The main difference between these two routes is the following:
 * /login renders another component without any sub-route
 * /game renders a Router that contains other sub-routes that render in turn other react components
 * Documentation about routing in React: https://reacttraining.com/react-router/web/guides/quick-start
 */
class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div>
            <Route
              path="/startPage"
              exact
              render={() => (
                <StartPageGuard>
                  <StartPage />
                </StartPageGuard>
              )}
            />
            <Route
              path="/game"
              render={() => (
                <GameGuard>
                  <GameRouter base={"/game"} />
                </GameGuard>
              )}
            />
            <Route
              path="/dashboard"
              render={() => (
                <GameGuard>
                  <Dashboard />
                </GameGuard>
              )}
            />
            <Route
              path="/profile"
              render={() => (
                <GameGuard>
                  <Profile />
                </GameGuard>
              )}
            />
            <Route
              path="/login"
              exact
              render={() => (
                <LoginGuard>
                  <Login />
                </LoginGuard>
              )}
            />
            <Route
              path="/home"
              exact
              render={() => (
                <Home />
              )}
            />
            <Route
              path="/register"
              exact
              render={() => (
                <RegisterGuard>
                  <Register />
                </RegisterGuard>
              )}
            />
            <Route
              path="/board"
              render={() => (
                <GameGuard>
                  <Board />
                </GameGuard>
              )}
            />
            <Route path="/" exact render={() => <Redirect to={"/game"} />} />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}
/*
 * Don't forget to export your component!
 */
export default AppRouter;
