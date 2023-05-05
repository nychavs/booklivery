import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';


const Home = ({navigation}) =>{
    const [search, setSearch] = React.useState("")
    return(
        <View className="flex h-screen relative">
           <View className="absolute h-20 w-full bg-navbar opacity-opa-navbar">
            <View className="top-8 left-[81%]">
            <EvilIcons name="cart" size={46} color="white"/>
            </View>
            <View className="left-8">
            <SimpleLineIcons name="menu" size={28} color="white"/>
            </View>
           </View>
           <View className="top-28 left-6">
            <Text className="text-lg">Looking for...?</Text>
            <View className="left-4 w-80">
            <TextInput 
                className="rounded border-2 border-btn h-10 pl-4 bg-search"
                onChangeText={setSearch}
                value={search}
                placeholder="Ex: Daisy Jones"
                />
            </View>
           </View>
        </View>
        
    )
}
export default Home; 