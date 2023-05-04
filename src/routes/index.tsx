import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import { Login } from '../screens/login'
import { Register } from '../screens/register'
import { Home } from "../screens/home";

export function Routes(){
  return(
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="login"
        component={Login}
      />

      <Screen 
        name="register"
        component={Register}
      />

      <Screen
        name="home"
        component={Home}
      />
    </Navigator>
  )
}