import Drawer from "./components/Layout";
import Main from './components/Draw/main';
import ContactComponent from './components/LoginSignup/Contact';
import LoginComponent from "./components/LoginSignup/Login";
import SignupComponent from "./components/LoginSignup/Signup";
import {Switch,Route} from 'react-router-dom';
import AboutComponent from './components/LoginSignup/About';

function App() {

    return (
        <>
        <Drawer >
            <Switch>
                <Route path='/SignUp' component={SignupComponent}/>
                <Route path='/Login' component={LoginComponent}/>
                <Route path='/Contact' component={ContactComponent}/>
                <Route path='/About' component={AboutComponent}/>
                <Route path='/' component={Main}/>
            </Switch>
        </Drawer>

        </>
    );
}
export default App;
