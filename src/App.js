import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import './app.css';
import Login from './pages/login/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/social_media_app/home">
            <Home />
          </Route>
          <Route path="/social_media_app/profile">
            <Profile />
          </Route>
          <Route path={['/social_media_app', '/']}>
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
