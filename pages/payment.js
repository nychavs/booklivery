import React from "react";
import { View, Text } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Payment = ({navigation, route}) =>{
    const {nome, autor, valor} = route.params;
    return(
        <View className="flex h-screen relative">
        <View className="absolute h-20 w-full bg-navbar opacity-opa-navbar">
         <View className="top-8 left-[81%]">
        <EvilIcons name="cart" size={46} color="white"
        onPress={()=>{}}/>
         </View>
         <View className="left-8">
            <MaterialCommunityIcons name="keyboard-backspace"
            size={32} color="white"
            onPress={()=>{navigation.navigate("Home")}}/>
        </View>
            <View className="top-8 self-center">
                <Text className="text-xl self-center">More information</Text>
        </View>
        </View>
        </View>
    )
}

export default Payment;