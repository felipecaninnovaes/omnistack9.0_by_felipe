import React ,{useState, useEffect } from 'react'
import {SafeAreaView, StyleSheet, Text, View, Image, AsyncStorage ,Platform, TouchableOpacity, ScrollView} from 'react-native';

import SpotList from '../components/SpotList'

import logo from '../assets/logo.png'

export default function List({navigation}) {
    const [techs, setTechs] = useState([])

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storageTechs => {
            const techsArray = storageTechs.split(',').map(tech => tech.trim())

            setTechs(techsArray)
        })
    })
    async function handleSubmit() {
        await AsyncStorage.setItem('user', '')
        navigation.navigate('Login')
    }

    return (
    <SafeAreaView style={styles.container}>
              <View style={styles.backbutton}><TouchableOpacity onPress={handleSubmit} style={styles.button}>
                 <Text style={styles.buttonText}> {'<-Voltar'} </Text> 
             </TouchableOpacity></View>
        <Image style={styles.logo} source={logo}/>

        <ScrollView>
            {techs.map(tech => <SpotList key={tech} tech={tech}/>)}
        </ScrollView>
    </SafeAreaView>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 39 : 0

    },      
    logo: {
        height:32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop:10,

    },
    buttonText: {
        backgroundColor: '#dfdfdf',
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 16,
        borderRadius: 10,
    },
    button: {
        height: 42,
        justifyContent:'center',
        //alignItems: 'center',
        borderRadius: 10,
    },
    backbutton:{
        alignSelf: 'flex-start',
    }
})
