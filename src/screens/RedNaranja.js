import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function RedNaranja(){
    const emergencyNumbers = [
        {
        id: 1,
        name: 'Policía',
        number: '911',
        icon: '👮',
        },
        {
        id: 2,
        name: 'Cruz Roja',
        number: '065',
        icon: '🚑',
        },
        {
        id: 3,
        name: 'Bomberos',
        number: '911',
        icon: '🚒',
        },
        {
        id: 4,
        name: 'Atención psicológica',
        number: '800-911-2000',
        icon: '📞',
        },
    ];

    const handlePress = (number) => {
        Linking.openURL(`tel:${number}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Emergencias</Text>

            {emergencyNumbers.map((emergency) => 
            (
                <TouchableOpacity 
                    key={emergency.id} 
                    style={styles.emergency} 
                    onPress={() => handlePress(emergency.number)}>

                    <Text 
                        style={styles.icon}> 
                        {emergency.icon}
                    </Text>
                    
                    <View>
                        <Text style={styles.name}>{emergency.name}</Text>
                        <Text style={styles.number}>{emergency.number}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    emergency: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    icon: {
        fontSize: 24,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    number: {
        fontSize: 14,
    },
});