import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../utilidades/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { createStackNavigator } from '@react-navigation/stack';
import Emergencias from './Emergencias'



export default function Home(navigation){
    return(
        <>
            <View style={styles.container}>
                <Text style={styles.menuText}>Menu</Text>

                <TouchableOpacity style={[styles.buttom, styles.buttom_morado]} >
                    <Icon style={styles.iconContainerStyle } name="heart" size={30} color="#FFFFFF" />
                    <Text style={styles.text }>RED NARANJA</Text>
                </TouchableOpacity>   

                <TouchableOpacity style={[styles.buttom, styles.buttom_lila]} >
                    <Icon style={styles.iconContainerStyle } name="ambulance" size={30} color="#FFFFFF" />
                    <Text style={styles.text }>EMERGENCIAS</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttom, styles.buttom_verde]} >
                    <Icon style={styles.iconContainerStyle } name="phone" size={30} color="#FFFFFF" />
                    <Text style={styles.text }>LINEA SIN VIOLENCIA</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttom, styles.buttom_morado]} >
                    <Icon style={styles.iconContainerStyle } name="map" size={30} color="#FFFFFF" />
                    <Text style={styles.text }>ESPACIOS NARANJA</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttom, styles.buttom_lila]} >
                    <Icon style={styles.iconContainerStyle } name="bullhorn" size={30} color="#FFFFFF" />
                    <Text style={styles.text }>CAMPAÑAS DE PREVENCION</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttom, styles.buttom_verde]} >
                    <Icon style={styles.iconContainerStyle } name="alert-circle" size={30} color="#FFFFFF" />
                    <Text style={styles.text }>ALERTA DE VIOLENCIA</Text>
                </TouchableOpacity> 

                <TouchableOpacity style={[styles.buttom, styles.buttom_morado]} >
                    <Icon style={styles.iconContainerStyle } name="alert" size={30} color="#FFFFFF" />
                    <Text style={styles.text }>PERSONAS DESAPARECIDAS</Text>
                </TouchableOpacity>   

                <TouchableOpacity style={[styles.buttom, styles.buttom_lila]} >
                    <Icon style={styles.iconContainerStyle } name="file" size={30} color="#FFFFFF" />
                    <Text style={styles.text }>INFOGRAFIAS</Text>
                </TouchableOpacity>      
                
                <TouchableOpacity style={[styles.buttom, styles.buttom_verde]} >
                    <Icon style={styles.iconContainerStyle } name="video" size={30} color="#FFFFFF" />
                    <Text style={styles.text }>VIDEOCONFERENCIAS</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}



const styles = StyleSheet.create({
    buttom: {
        flexDirection: 'row',
        padding: 10,
        borderRadius: 30,
        width: '75%',
        alignItems: "center",
        marginVertical: 10,
        justifyContent: 'center',
    },
    buttom_morado: {
        backgroundColor: colors.COLOR_MORADO,
    },
    buttom_lila: {
        backgroundColor: colors.COLOR_LILA,
    },
    buttom_verde: {
        backgroundColor: colors.COLOR_VERDE,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.COLOR_BLANCO,
    },
    container: {
        flex: 1,
        backgroundColor: colors.COLOR_AMARILLO,
        paddingTop: 50,
        alignItems: "center",
    },
    menuText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.COLOR_BLANCO,
        paddingBottom: 20,
    },

    iconContainerStyle: { 
        marginRight: 10 
    }
})