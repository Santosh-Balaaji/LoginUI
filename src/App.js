import './App.css';
import {Switch, Route} from 'react-router-dom';
import SignUp from './Container/signUp';
import SignIn from './Container/signIn';
import dashBoard from './Container/dashBoard';
import landing from './Container/landing';

function App() {
  return (
    <div className="App">
       <Switch>
        <Route exact path='/signUp' component={SignUp}/>
        <Route exact path='/signIn' component={SignIn}/>
        <Route exact path='/dashBoard' component={dashBoard}/>
        <Route exact path='/landing' component={landing}/>
        

        </Switch>
    </div>
  );
}

export default App;
