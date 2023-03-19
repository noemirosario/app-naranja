import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Linking } from 'react-native'
import colors from '../utilidades/colors'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Home(){
    const policia = () => {
        Linking.openURL('tel:066');
    }
    const cruz_roja = () => {
        Linking.openURL('tel:065');
    }

    return(
        <>
            <View style={styles.viewEmergencia}>
                <TouchableOpacity onPress={policia}>
                    <Icon name="arrow-back" size={30} color="#4F8EF7" />
                </TouchableOpacity>
                <Text style={styles.textNumber}>POLICIA</Text>

                <TouchableOpacity onPress={cruz_roja}>
                    <Icon name="arrow-back" size={30} color="#4F8EF7" />
                </TouchableOpacity>
                <Text style={styles.textNumber}>CRUZ ROJA</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    viewEmergencia: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: colors.COLOR_AMARILLO
    },
    textNumber: {
        marginTop: 20,
        color: colors.COLOR_BLANCO,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20
    }
})