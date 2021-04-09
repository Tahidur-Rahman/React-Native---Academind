import React from 'react'
import {Button, StatusBar, Text, View,StyleSheet} from 'react-native'

function App() {
  return (
    <View>
      <Text >
      <Button title="dCLICK" style={styles.button}/>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  button:{
    width:"100%",
    marginTop:122,
  }
})
export default App
