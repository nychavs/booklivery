import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Payment = ({navigation, route}) =>{
    const [numCartao, setNumCartao] = useState();
    const [nomeCartao, setNomeCartao] = useState();
    const [cvcCartao, setCVCCartao] = useState();
    const [validCartao, setValidCartao] = useState();
    const {nome, autor, valor} = route.params;

    const upload = e => {
        if (!numCartao) {
          alert('Missign numero cartao!')
          return
        }
        if (!nomeCartao) {
          alert('missing nome cartao!')
          return
        }
        if (!cvcCartao) {
          alert('missing cvc cartao!')
          return
        }
        if (!validCartao) {
          alert('missing validade do cartao!')
          return
        }
        alert("compra efetuada com sucesso")
      }


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
        <View className="top-8">
                <Text className="text-xl self-center">Payment page</Text>
        </View>
        <View className=" top-10 left-10 w-80 pt-2">
        <Text className="pb-2">Numero cartão</Text>
        <TextInput 
                className="rounded-lg border-2 border-btn h-11 pl-4 bg-search"
                value={numCartao}
                keyboardType="number-pad"
                onChangeText={(text) => setNumCartao(text)}
                placeholder="digite o numero do seu cartao"
                />
            <Text className="mt-6 pb-2">Nome titular cartão</Text>
            <TextInput 
                className="rounded-lg border-2 border-btn h-11 pl-4 bg-search"
                keyboardType='number-pad'
                value={nomeCartao}
                onChangeText={(text)=>setNomeCartao(text)}
                placeholder="digite o nome que está no titular do cartão"
                />
             <Text className="mt-6 pb-2">CVC</Text>
            <TextInput 
                className="rounded-lg border-2 border-btn h-11 pl-4 bg-search"
                keyboardType='text'
                value={cvcCartao}
                onChangeText={(text)=>setCVCCartao(text)}
                placeholder="digite o código que está no verso do cartão"
                />
            <Text className="mt-6 pb-2">Data de validade</Text>
            <TextInput 
                className="rounded-lg border-2 border-btn h-11 pl-4 bg-search"
                keyboardType='text'
                value={validCartao}
                onChangeText={(text)=>setValidCartao(text)}
                placeholder="digite a data de validade do cartão"
                />
            <TouchableOpacity
                className="bg-btn w-24 mt-8 left-28 hover:bg-yellow-700 py-2 rounded-md"
                onPress={()=>upload()}>
                <Text className="text-center text-white">pagar</Text>
            </TouchableOpacity>
            </View>
        </View>
        </View>
    )
}

export default Payment;