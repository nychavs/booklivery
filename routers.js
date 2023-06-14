import Home from "./pages/home";
import Welcome from "./pages/welcome";
import Details from "./pages/details";
import Login from "./pages/login";
import Register from "./pages/register";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Payment from "./pages/payment";
const Stack = createNativeStackNavigator()

function Routers(){
    return(
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
            options={{
                title:'',
                headerTransparent: true,
                headerShown: false
            }}
            name='Welcome' component={Welcome}/>
            <Stack.Screen
            options={{
                title:'',
                headerTransparent: true,
                headerShown: false
            }}
            name='Home' component={Home}/>
            <Stack.Screen
            options={{
                title:'',
                headerTransparent: true,
                headerShown: false
            }}
            name='Login' component={Login}/>
            <Stack.Screen
            options={{
                title:'',
                headerTransparent: true,
                headerShown: false
            }}
            name='Register' component={Register}/>
            <Stack.Screen
            options={{
                title:'',
                headerTransparent: true,
                headerShown: false
            }}
            name='Details' component={Details}/>
            <Stack.Screen
            options={{
                title: '',
                headerTransparent: true,
                headerShown: false
            }}
            name="Payment" component={Payment}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Routers;