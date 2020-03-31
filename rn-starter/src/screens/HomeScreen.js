import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity} from "react-native";

const HomeScreen = props => {

  return (
    <View>
  <Text 
  style={styles.text}>HomeScreen</Text>
  <Button 
  style={styles.buttonStyle}
  onPress= { () => props.navigation.navigate('listScreen')} 
  title="List Friends Age" 
  />
  <Button style={styles.buttonStyle}
  onPress= { () => props.navigation.navigate('componentScreen')}
  title="My components"
  />

  <Button 
  onPress={() => props.navigation.navigate('imageScreen')}
  title="Image Screen"
  />

  <Button 
  onPress={() => props.navigation.navigate('counter')}
  title="Counter Screen"
  />

<Button 
  onPress={() => props.navigation.navigate('SquareCounter')}
  title="Colour Counter Screen"
  />

  <TouchableOpacity 
  onPress={ () => props.navigation.navigate('imageScreen')}>
    <Text style={styles.text}>list images from touchable opacity</Text>
  </TouchableOpacity>

  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  buttonStyle: {
    width: 20
  }
});

export default HomeScreen;
