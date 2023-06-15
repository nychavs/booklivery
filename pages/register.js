import React, {useState} from "react";
import {View, ImageBackground, TextInput, Text, SafeAreaView, Alert} from 'react-native'
import { TouchableOpacity } from "react-native";
import {auth, logInWithEmailAndPassword, storage, db  }from "../src/config/firebase.js"
import { useAuthState } from 'react-firebase-hooks/auth'
import { collection, addDoc } from 'firebase/firestore'

const Register = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [senha, setSenha]= useState('')
    const [nome, setNome]= useState('')
    const [user, loading, error] = useAuthState(auth)

    const upload = e => {
        e.preventDefault()
        if (!nome) {
          alert('Missign name!')
          return
        }
        if (!email) {
          alert('missing e-mail!')
          return
        }
        if (!senha) {
          alert('missing password!')
          return
        }
        adicionar()
      }
    
      async function adicionar () {
        await addDoc(collection(db, 'users'), {
          name: nome,
          email: email,
          senha: senha,
          status: false,
        })
        
        navigation.navigate("Home")

      }

    return(
        <View className="flex h-screen relative">
            <View className="absolute h-20 w-full bg-navbar opacity-opa-navbar">
                <View className="flex items-center top-7">
                    <Text className="text-xl text-white">Register</Text>
                </View>
            <View className=" top-20 left-10 w-80 pt-2">
                <Text className="pb-2">Name</Text>
            <TextInput 
                className="rounded-lg border-2 border-btn h-11 pl-4 bg-search"
                value={nome}
                onChangeText={e => {setNome(e)}}
                placeholder="Ex: fulano detal"
                />
                <Text className="pb-2">E-mail</Text>
            <TextInput 
                className="rounded-lg border-2 border-btn h-11 pl-4 bg-search"
                value={email}
                onChangeText={(e) => setEmail(e)}
                placeholder="Ex: myname@gmail.com"
                />
            <Text className="mt-6 pb-2">Password</Text>
            <TextInput 
                className="rounded-lg border-2 border-btn h-11 pl-4 bg-search"
                keyboardType='password'
                value={senha}
                onChangeText={(e)=>setSenha(e)}
                placeholder="*******"
                />
            <TouchableOpacity
                className="bg-btn w-24 mt-8 left-28 hover:bg-yellow-700 py-2 rounded-md"
                onPress={upload}>
                <Text className="text-center text-white">Continue</Text>
            </TouchableOpacity>
            </View>
            </View>
            </View>
    )

}

export default Register
