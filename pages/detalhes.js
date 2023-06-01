import React, { useState } from "react";
import { Text, View, Image, Alert, Modal} from "react-native";
import { TouchableOpacity } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Detalhes = ({navigation, route}) =>{
    const { id, nome, imagem, autor, valor, numPages, descricao, avaliacao} = route.params;
    const [valorCart, setValorCart] = useState() 
    const [qtdUnit, setqtdUnit] = useState() 
    const [modalVisible, setModalVisible] = useState(false)

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
                    <View className="bg-btn mt-2 ml-4 w-72 flex h-0.5"></View>
                    <View className="flex-row justify-between top-5">
                        <Image source={require('C:/Users/46404521873/Desktop/booklivery/assets/daisy.jpg')} 
                        style={{width:130, height:200, borderRadius:9}}
                        />
                        <View className="flex-column w-44 justify-evenly">
                            <Text className="text-lg">{nome}</Text>
                            <Text className="text-lg">Autor: {autor}</Text>
                            <Text className="text-lg">{numPages} pages </Text>
                            <Text className="mt-1 text-lg bg-btn-clear h-8 w-20 text-center rounded">$ {valor}</Text>
                        </View>
                        </View>
                        <View className="mt-10 w-80 h-32 self-center">
                            <Text className="text-base">{descricao}</Text>
                            <TouchableOpacity
                                onPress='alterar height da janela text descricao'
                            >
                                <Text className="text-navbar mt-1"> + See more</Text>
                            </TouchableOpacity>
                        </View>
                    <View className="bg-btn mt-10 ml-4 w-72 h-0.5"></View>
                        <View className="justify-center mt-3 flex-row">
                            <Text className="pt-1 text-base">Rate </Text>
                            <Entypo name="star" size={26} color="#735238" /> 
                        </View>
                        <View className="mt-4 flex self-center">
                            <Modal
                                animationType="fade"
                                transparent={true}
                                visible={modalVisible}

                                onRequestClose={()=>{
                                    setModalVisible(!modalVisible)}} >
                                <View className="bg-white w-80 h-72 rounded-2xl self-center  mt-52">
                                    <Text className="text-xl">You wish list: </Text>
                                    <View className="flex flex-row items-center pt-3 justify-evenly">
                                        <Image
                                            source={require('C:/Users/46404521873/Desktop/booklivery/assets/daisy.jpg')}
                                            style={{width: 70, height: 100, borderRadius: 9}}
                                        />
                                        <View className="flex flex-col">
                                            <Text className="text-base pb-2">{nome}</Text>
                                            <Text className="text-base pb-2"> ?? unit</Text>
                                        </View>
                                    </View>
                                    <View  l>
                                            <Text className="text-base"> Total Price: </Text>
                                            <Text className="text-base">{valor}</Text>
                                    </View>
                                    <View className="items-center">
                                        <TouchableOpacity
                                        className="bg-btn-clear px-2 rounded items-center w-36"
                                        onPress={()=> setModalVisible(!modalVisible)}>
                                            <Text className="text-base">Add more books </Text>
                                        </TouchableOpacity>
                                            <Text className="text-base"> or </Text>
                                        <TouchableOpacity
                                        className="bg-btn px-[14] rounded w-36 items-center"
                                        onPress={()=>navigation.navigate("Payment")}>
                                            <Text className="text-white text-base">Go to payment </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Modal>
                
                            <TouchableOpacity 
                            className="bg-btn w-40 rounded-md"
                            onPress={()=>setModalVisible(!modalVisible)}
                            >
                                <Text className="text-white text-lg self-center py-1 text-center">Add to wish list</Text>
                            </TouchableOpacity>
                        </View>
                        
            </View>
                      
                    
        </View>
        </View>
     
    )
}

export default Detalhes;