import React from 'react'
import { Text, View,StyleSheet } from 'react-native';

import {Ionicons} from '@expo/vector-icons'

function Header({title}) {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}><Ionicons name='ios-game-controller-sharp' size={24} color="black"/> {title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#f7287b',
        width:'100%',
        height:80,
        alignItems:'center',
        paddingTop:40
    },
    headerTitle:{
        fontSize:18,
        fontFamily:'open-sans-bold'
    }
})

export default Header
