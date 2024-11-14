import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom/cjs/react-router-dom.min';
import UsersPage from './user/pages/UsersPage';
import NewPlacePage from './places/pages/NewPlacePage';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlacePage from './places/pages/UpdatePlacePage';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import AuthPage from './user/pages/AuthPage';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path='/' exact>
            <UsersPage />
          </Route>
          <Route path='/:userId/places' exact>
            <UserPlaces />
          </Route>
          <Route path='/places/new' exact>
            <NewPlacePage />
          </Route>
          <Route path='/auth' exact>
            <AuthPage />
          </Route>
          <Route path='/places/:placeId'>
            <UpdatePlacePage />
          </Route>
          <Redirect to='/' />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
