import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import colors from '../utilidades/colors';

const emergencyNumbers = [
    {
        id: 1,
        name: 'Mujeres en Situación de Violencia',
        number: '800 108 4053',
        icon: '👩‍💼',
        description: 'Se brinda atención a través de la línea telefónica a mujeres, sus hijas e hijos en situación de violencia de género, en cualquiera de sus modalidades y tipos, proporcionando intervención en crisis, apoyo psicológico y asesoría jurídica de primer contacto.',
    },
];

const EmergencyCard = ({ emergency }) => {
    const handlePress = () => {
        Linking.openURL(`tel:${emergency.number}`);
    };

    return (
        <TouchableOpacity style={styles.card} onPress={handlePress}>
            <Text style={styles.icon}>{emergency.icon}</Text>
            <Text style={styles.name}>{emergency.name}</Text>
            <Text style={styles.number}>{emergency.number}</Text>
            <Text style={styles.description}>{emergency.description}</Text>
        </TouchableOpacity>   
        );
};

export default function EmergenciasScreen() {
    return (
        <View style={styles.container}>
            {emergencyNumbers.map((emergency) => (
                <EmergencyCard key={emergency.id} emergency={emergency} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.COLOR_ROSA_PASTEL,
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 20,
    },
    icon: {
        fontSize: 50,
        textAlign: 'center',
        marginBottom: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
    },
    number: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        textAlign: 'justify',
    },
    container: {
        flex: 1,
        backgroundColor: colors.COLOR_MORADO,
        padding: 20,
    },
});
