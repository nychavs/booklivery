import React, { useEffect, useState } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';
import { db } from "../src/config/firebase"
import { FlatList } from "react-native";
import { Image } from "react-native";
import {getDocs, collection} from 'firebase/firestore';

const Home = ({navigation}) =>{
    const [livros,setLivros] = useState([])
    const [search, setSearch] = React.useState("")

    const media = '?alt=media'
    const repositorio = 'https://firebasestorage.googleapis.com/v0/b/booklivery-6641a.appspot.com/o/images%2F'
    // https://firebasestorage.googleapis.com/v0/b/booklivery-6641a.appspot.com/o/images%2Fevelyn_hugo.jpg?alt=media

    useEffect(() => {
        getDocs(collection(db, 'livros'))
          .then((querySnapShot) => {
            const list = []
            querySnapShot.forEach(doc =>{
              list.push({ ...doc.data(), id: doc.id})
            })
            setLivros(list)
          })
      },[])

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
           <View className="top-28 ">
            <Text className="left-6 text-xl">Looking for...?</Text>
            <View className=" left-10 w-80 pt-2">
            <TextInput 
                className="rounded-lg border-2 border-btn h-11 pl-4 bg-search"
                onChangeText={setSearch}
                value={search}
                placeholder="Ex: Daisy Jones"
                />
            </View>
            <View>
                <Text className="text-xl mt-5 mb-2 left-6 ">Categories </Text>
                <View className="flex-row justify-evenly">
                    <TouchableOpacity 
                    className="bg-btn-clear rounded focus:bg-btn px-3"
                    onPress='filtrar de acordo'>
                        <Text className="text-lg"> Fiction </Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-btn-clear focus:bg-btn rounded px-3">
                        <Text className="text-lg"> Romance </Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-btn-clear focus:bg-btn rounded px-3">
                        <Text className="text-lg"> Horror </Text>
                    </TouchableOpacity>
                </View>
           </View>
           <View className="flex self-center">
            <Text className="text-xl mt-5 self-center">Most popular</Text>
            <View className="bg-btn mt-2 w-80 h-0.5"></View>
            <FlatList
                numColumns={3}
                data={livros}
                renderItem={({item})=>{
                    return(
                        <ScrollView>
                        <View className="top-4 w-24 mb-10">
                            <View className="self-center mb-1">
                                <Pressable  onPress={()=>{
                                    navigation.navigate('Detalhes',
                                    {id: item.id, nome: item.nome, 
                                        imagem: item.image, valor: item.valor, 
                                        numPages: item.numPages, autor: item.autor,
                                       descricao: item.descricao,})
                                    }} >
                                <Image 
                               source={require('C:/Users/46404521873/Desktop/booklivery/assets/daisy.jpg')}
                               style={{width:70, height:110, borderRadius:9}} />
                               </Pressable>
                            </View>
                            <View className="self-center">
                            <Text className="text-center"
                               onPress={()=>{
                                   navigation.navigate('Detalhes',
                                   {id: item.id, nome: item.nome, 
                                    imagem: item.image, valor: item.valor, 
                                    numPages: item.numPages, autor: item.autor,
                                    descricao: item.descricao,})
                                }}
                                > {item.nome} </Text>
                            </View>
                        </View>
                        </ScrollView>
                )
            }}
            
            />
           </View>
            </View>
        </View>
        
        
    )
}
export default Home; 