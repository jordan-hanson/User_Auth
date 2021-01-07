import './App.css';
import { Link, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
        <Switch>
          Login Form
          <Route path="/login" />
          Protected Route view Friends after Sign In
          <Route path="/newfriend" />
          Protected Friend Form that directs to sign in if no token in storage
          <Route path="/friends" />
          Redirect to Home
          <Route path="/" />
        </Switch>
      </ul>
    </div>

  );
}

export default App;
