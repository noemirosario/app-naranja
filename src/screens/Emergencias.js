import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import colors from '../utilidades/colors'

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
    {
        id: 5,
        name: 'Línea Mujeres',
        number: '01-800-1084-053',
        icon: '👩‍💼',
    },
    {
        id: 6,
        name: 'Sistema de Emergencias del Estado de México (SESEM)',
        number: '800-911-2000',
        icon: '🚨',
    },
    {
        id: 7,
        name: 'Denuncia Anónima',
        number: '089',
        icon: '☎️',
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
    container: {
        flex: 1,
        backgroundColor: colors.COLOR_AMARILLO,
        padding: 15,
    },
    card: {
        backgroundColor: colors.COLOR_AMARILLO_PASTEL,
        borderRadius: 10,
        padding: 20,
        marginBottom: 25,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        fontSize: 24,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.COLOR_NEGRO,
        flex: 1,
    },
    number: {
        fontSize: 14,
        color: colors.COLOR_GRIS,
    },
});