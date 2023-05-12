import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native";

const Detalhes = ({navigation, route}) =>{
    const { id, nome} = route.params;
    return(
        <View className="top-8">
            <TouchableOpacity
            onPress={()=>{
                navigation.navigate("Home")}}>
                <Text>VOLTAR</Text>
            </TouchableOpacity>
                <Text> Nome: {nome} </Text>
        </View>
    )
}

export default Detalhes;