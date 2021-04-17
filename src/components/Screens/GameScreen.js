import React,{useState} from 'react'
import { Button, Text, View,StyleSheet } from 'react-native'
import Card from '../Card'

function GameScreen({userChoice}) {
    const [guess,setGuess] = useState(getRandomNumber(0,99,userChoice))

function getRandomNumber(min,max,exclude){
    
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max -min)) +min;
    if(rndNum === exclude){
        getRandomNumber(min,max,exclude);
    }else{
        return rndNum
    }
}
    return (
        <View style={styles.gameScreen}>
            <Text style={styles.gameTitle}>Opponents Guess</Text>
            <Text style={styles.guess}>{guess}</Text>
            <Card style={styles.buttons}>
                <Button title="Lower" onPress={()=>{}}/>
                <Button title="Higher" onPress={()=>{}}/>
            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    gameScreen:{
        justifyContent:'center',
        alignItems:'center'
    },
    gameTitle:{
        fontSize:20,
        marginVertical:10
    },
    guess:{
        fontSize:24,
    },
    buttons:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:"60%",
        marginVertical:10
    }
})

export default GameScreen
