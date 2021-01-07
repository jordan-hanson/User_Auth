import './App.css';
import { Route, Switch } from 'react-router-dom'
import { LoginForm } from './components/loginForm'
import { Friends } from './components/friends'
import { PrivateRoute } from './components/privateRoute'
import { FriendForm } from './components/newFriendForm'

function App() {
  return (
    <div className="App">
      <Switch>
        Login Form
          <Route path="/login" component={LoginForm} />
          Protected Route view Friends after Sign In
          <PrivateRoute path="/newfriend" component={FriendForm} />
          Protected Friend Form that directs to sign in if no token in storage
          <PrivateRoute path="/friends" component={Friends} />
          Redirect to Home
          <Route path="/" component={LoginForm} />
      </Switch>
    </div>

  );
}

export default App;
