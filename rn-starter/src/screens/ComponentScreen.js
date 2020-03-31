import React from 'react';
import {Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {
    const myName = "Guuraj"
    return (
    <View>
    <Text style={styles.textStyle} >Hi My new Android Application</Text>
    <Text style={styles.textStyleName}>{myName}</Text>
    </View>
    );
} 

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 45
    },
    textStyleName:{
        fontSize: 20
    }
})

export default ComponentScreen;