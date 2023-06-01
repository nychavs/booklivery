import Home from "./pages/home";
import Welcome from "./pages/welcome";
import Detalhes from "./pages/detalhes";
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
            name='Detalhes' component={Detalhes}/>
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