
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login'
import './App.css';

import {BrowserRouter,  Route , Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/register"  component={Register} />
        <Route path="/login"  component={Login} />
      </Switch>

    </BrowserRouter>
  
  );
}

export default App;
