import React from 'react'
import { Text, View,StyleSheet } from 'react-native'

function Header({title}) {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
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
        fontWeight:'600'
    }
})

export default Header
