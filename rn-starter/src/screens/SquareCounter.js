import React ,{useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import ColorCounter from '../components/colorCounter';

const COLOUR_INCREMENT = 50
const SquareCounter = () => {
    
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);
    return (
        <View>
            <ColorCounter color="Red"
            onIncrease={() => setRed(red + COLOUR_INCREMENT)}
            onDecrease={() => setRed(red - COLOUR_INCREMENT)}
            />
            <ColorCounter color="Green"
            onIncrease={() => setGreen(green + COLOUR_INCREMENT)}
            onDecrease={() => setGreen(green - COLOUR_INCREMENT)}
            />
            <ColorCounter color="Blue"
            onIncrease={() => setBlue(blue + COLOUR_INCREMENT)}
            onDecrease={() => setBlue(blue + COLOUR_INCREMENT)}
            />
            <View style={{ height:150 , width: 150, backgroundColor: `rgb(${red},${green},${blue})`}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default SquareCounter;