import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {Login} from '../screens/login'
import {Register} from '../screens/register'

const Stack = createNativeStackNavigator();

export function Routes(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen 
        name="register"
        component={Register}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}