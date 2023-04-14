import Home from "./pages/home";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

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
            name='Home' component={Home}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Routers;