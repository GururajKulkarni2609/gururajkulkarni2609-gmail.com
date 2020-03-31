import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
 const friends = [
    //  {name: "Friend Age 20" , key: "1"},
    //  {name: "Friend Age 30" , key: "2"},
    //  {name: "Friend Age 40", key: "3"},
    //  {name: "Friend Age 50", key: "4"}
    {name: "Friend 1 " ,Age : "20"},
      {name: "Friend 2" , Age: "30"},
      {name: "Friend 3", Age: "40"},
      {name: "Friend 4", Age: "50"}
 ]
 return (
     <FlatList 
     //horizontal
     showsHorizontalScrollIndicator={false}
     keyExtractor ={friend => friend.name}
     data={friends}
     renderItem={({item}) => {
         return <Text style={styles.textStyle}>{item.name} - {item.Age}</Text>
     }}
     ></FlatList>
 );
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize:50,
        marginVertical: 150
    }
}
)

export default ListScreen;
