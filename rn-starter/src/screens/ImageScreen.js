import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ImageDetail from '../components/imageDetail';

const ImageScreen = () => {
    return (
        <View>
    <ImageDetail 
    imageTitle="Forest" 
    imageSource={require('../../assets/forest.jpg')}
    />
    <ImageDetail 
    imageTitle="Beach" 
    imageSource={require('../../assets/beach.jpg')}
    />
    <ImageDetail 
    imageTitle="Mountain" 
    imageSource={require('../../assets/mountain.jpg')}
    />
    </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default ImageScreen;