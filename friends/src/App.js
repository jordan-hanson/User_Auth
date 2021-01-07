import './App.css';
import { Route, Switch } from 'react-router-dom'
import { LoginForm } from './components/loginForm'

function App() {
  return (
    <div className="App">
      <Switch>
        Login Form
          <Route path="/login" component={LoginForm} />
          Protected Route view Friends after Sign In
          <Route path="/newfriend" />
          Protected Friend Form that directs to sign in if no token in storage
          <Route path="/friends" />
          Redirect to Home
          <Route path="/" component={LoginForm} />
      </Switch>
    </div>

  );
}

export default App;
