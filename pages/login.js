import React, {useState} from "react";
import {View, ImageBackground, TextInput, Text, SafeAreaView} from 'react-native'
import { TouchableOpacity } from "react-native";
import {auth, logInWithEmailAndPassword }from "../src/config/firebase.js"
import { useAuthState } from 'react-firebase-hooks/auth'
import {signInWithEmailAndPassword} from "firebase/auth";

const Login = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword]= useState('')
    const [user, loading, error] = useAuthState(auth)

    const loginFirebase = async () => {
        try {
          var teste = await signInWithEmailAndPassword(auth, email, password);
          navigation.navigate("Home")
        } catch (err) {
          alert("User not found")
          setEmail("")
          setPassword("")
        }
      };
    return(
        <View className="flex h-screen relative">
            <View className="absolute h-20 w-full bg-navbar opacity-opa-navbar">
                <View className="flex items-center top-7">
                    <Text className="text-xl text-white">Login</Text>
                </View>
            <View className=" top-20 left-10 w-80 pt-2">
                <Text className="pb-2">E-mail</Text>
            <TextInput 
                className="rounded-lg border-2 border-btn h-11 pl-4 bg-search"
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="Ex: myname@gmail.com"
                />
            <Text className="mt-6 pb-2">Password</Text>
            <TextInput 
                className="rounded-lg border-2 border-btn h-11 pl-4 bg-search"
                keyboardType='password'
                value={password}
                onChangeText={(text)=>setPassword(text)}
                placeholder="*******"
                />
            <TouchableOpacity
                className="mt-2 left-2 font-bold py-2 rounded-md"
                onPress={()=>navigation.navigate("Register")}>
                <Text className="text-center text-btn">Forgot your password? Let's reset!</Text>
            </TouchableOpacity>
            <TouchableOpacity
                className="bg-btn w-24 mt-8 left-28 hover:bg-yellow-700 py-2 rounded-md"
                onPress={()=>loginFirebase()}>
                <Text className="text-center text-white">Continue</Text>
            </TouchableOpacity>
            <TouchableOpacity
                className="mt-8 left-2 font-bold py-2 rounded-md"
                onPress={()=>navigation.navigate("Register")}>
                <Text className="text-center text-btn">Not a user yet? Click here and change that!</Text>
            </TouchableOpacity>
            
            
            </View>
        </View>
        </View>
    )}


export default Login