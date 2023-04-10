import React from "react";
import { Text, View, Button} from "react-native";

export default function Contact(props){
    const {navigation} = props;

    return (
        <View>
            <Text>
                estamos en el Contact
            </Text>
            <Button title="about" onPress={() => navigation.navigate('about')} />
        </View>
    )
}
