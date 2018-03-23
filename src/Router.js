import React from 'react'; 
import { Stack, Scene, Router, ActionConst, Actions } from 'react-native-router-flux';
import LoginForm from './modules/auth/scenes/LoginForm';
import Welcome from './modules/auth/scenes/Welcome'; 
import Register from './modules/auth/scenes/Register'; 
import CompleteProfile from './modules/auth/scenes/CompleteProfile'; 
import ForgotPassword from './modules/auth/scenes/ForgotPassword';
import Dashboard from './modules/dashboard/scenes/Dashboard'; 

import SparProfile from './modules/dashboard/scenes/SparProfile'; 
import SparRequest from './modules/dashboard/scenes/SparRequest';
import SparSearch from './modules/dashboard/scenes/SparSearch';



const RouterComponent = () => {

  return(
    <Router >
   <Scene key = "root" hideNavBar>
   <Stack key="Auth" >
<Scene key="Welcome" component={Welcome} title="" initial={true} hideNavBar/>
<Scene key="Register" component={Register} title="Register" back/>

<Scene key="CompleteProfile" component={CompleteProfile} title="Select Username" back={false}/>
                        <Scene key="Login" component={LoginForm} title="Login"/>
                        <Scene key="ForgotPassword" component={ForgotPassword} title="Forgot Password"/>
</Stack>
<Stack key="Main" >
                        <Scene key="Dashboard" component={Dashboard} title="Dashboard" initial={true} type={ActionConst.REPLACE}/>
                        <Scene key="SparSearch" component={SparSearch} title="SparSearch" back/>
                    </Stack>
                    </Scene>
      </Router>
  );
}

export default RouterComponent; 