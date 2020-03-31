import React, {useState} from 'react';
import {Text, View, Button} from 'react-native'

const counterScreen = () => {
   const [myCounter, setCounter] = useState(0);

return (
    <View>
        <Button 
        onPress={() => {setCounter(myCounter + 1)}}
        title="Increse"
        />
        <Button     
        onPress={() => {setCounter(myCounter - 1)}}
        title="Decrease"
        />
        <Text>Counter - {myCounter}</Text>
    </View>
);
}

export default counterScreen;
