import React, { useState } from 'react';
import {Text, View, StyleSheet, Image, Button} from 'react-native';

const colorCounter = ({ color , onIncrease, onDecrease }) => {
    return (
        
        <View>
            <Text>Colour - {color}</Text>
            <Button title={`Increase ${color}`} 
            onPress={() => onIncrease()}/>
            <Button title={`Decrease ${color}`} 
            onPress={() => onDecrease()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default colorCounter;