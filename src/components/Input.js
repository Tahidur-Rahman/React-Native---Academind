import React from 'react'
import { TextInput,StyleSheet } from 'react-native'

function Input(props) {
    return (
        <TextInput {...props} style={{...props.style,...styles.input}}/>
    )
}

const styles = StyleSheet.create({
    input:{
        padding:5,
        borderBottomColor:'gray',
        borderBottomWidth:2,
        height:40
    }
})
export default Input
