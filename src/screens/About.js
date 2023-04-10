import React from "react";
import { Text, View, Button } from "react-native";

export default function About(props){
    const {c} = props;

    return (
        <View>
            <Text>
                etsmos en el About
            </Text>
            <Button title="contact" onPress={() => navigation.navigate('contact')} />


        </View>
    )
}