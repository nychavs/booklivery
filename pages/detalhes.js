import React from "react";
import { Text, View, Image} from "react-native";
import { TouchableOpacity } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Detalhes = ({navigation, route}) =>{
    const { id, nome, autor, valor, numPages, descricao} = route.params;
    return(
        <View className="flex h-screen relative">
        <View className="absolute h-20 w-full bg-navbar opacity-opa-navbar">
         <View className="top-8 left-[81%]">
        <EvilIcons name="cart" size={46} color="white"/>
         </View>
         <View className="left-8">
            <MaterialCommunityIcons name="keyboard-backspace"
            size={32} color="white"
            onPress={()=>{navigation.navigate("Home")}}/>
        </View>
            <View className="top-8  self-center">
                <Text className="text-xl self-center">More information</Text>
                    <View className="bg-btn mt-2 w-80 h-0.5"></View>
                    <View className="flex-row justify-between top-5">
                        <Image source={require('C:/Users/46404521873/Desktop/booklivery/assets/daisy.jpg')} 
                        style={{width:130, height:200, borderRadius:9}}
                        />
                        <View className="flex-column w-44 justify-evenly">
                            <Text className="text-lg">{nome}</Text>
                            <Text className="text-lg">Autor: {autor}</Text>
                            <Text className="text-lg">{numPages} pages </Text>
                            <Text className="text-lg bg-btn-clear h-8 w-20 text-center rounded">$ {valor}</Text>
                        </View>
                        </View>
                        <View className="mt-12 w-80 h-40 self-center">
                            <Text className="text-base">{descricao}</Text>
                            <TouchableOpacity>
                                <Text className="text-navbar"> + See more</Text>
                            </TouchableOpacity>
                        </View>
            </View>
        </View>
        </View>
     
    )
}

export default Detalhes;