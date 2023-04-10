import React from "react";
import { Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

export default function Home1(props){
    const {navigation} = props
    return (
        <View>
            <Text>
                etsmos en el hom
            </Text>
            <Button title="ir a about" onPress={() => navigation.navigate("about")}/>
            <Button title="ir a contact" onPress={() => navigation.navigate("contact")}/>
        </View>
    )
}

