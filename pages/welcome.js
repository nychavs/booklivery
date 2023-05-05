import React from "react";
import {View, ImageBackground, Text, SafeAreaView} from 'react-native'
import { TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Welcome = ({navigation}) => {
    return(
    <View className="flex h-screen relative">
        <ImageBackground
            resizeMode="cover"
            style={{flex: 1, justifyContent: 'center', opacity: 0.6, backgroundColor: 'rgba(0,0,0,1)'}}
            source={require('C:/Users/46404521873/Desktop/booklivery/assets/Foto01.png')}
        />
        <View className="absolute top-20 left-8">
            <Text className='text-4xl text-white font-light'>
                Buy books,
            </Text>
            <View className='left-20'>
            <Text className='text-4xl text-white font-light'>
                gain knowlodge
            </Text>
            </View>
        </View>
        <View className="absolute top-[42vw] mx-16">
            <Text className="text-white text-base text-center tracking-wide leading-5">
                the best book shop online with the  {'\n'} fastest delivery in the market
            </Text>
        </View>
        <View className='absolute bottom-3 left-28'>
            <TouchableOpacity 
            onPress={()=>navigation.navigate('Home')}
            className='bg-yellow-900 hover:bg-yellow-700 text-white font-bold py-2 px-10 rounded'>
                <View className="flex space-x-4 flex-row items-center">
                    <Text className="text-white text-xl">Get Started</Text>
                    <AntDesign name="arrowright" size={20} color="white" />
                </View>
            </TouchableOpacity>
        </View>
    </View>
    )

}
export default Welcome;