import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../utilidades/colors'

export default function Home(){
    return(
        <>
            <View style={styles.container}>
                <Text style={styles.menuText}>Menu</Text>

                <TouchableOpacity style={[styles.buttom, styles.buttom_morado]} >
                    <Text style={styles.text }>RED NARANJA</Text>
                </TouchableOpacity>   

                <TouchableOpacity style={[styles.buttom, styles.buttom_lila]} >
                    <Text style={styles.text }>EMERGENCIAS</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttom, styles.buttom_verde]} >
                    <Text style={styles.text }>LINEA SIN VIOLENCIA</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttom, styles.buttom_morado]} >
                    <Text style={styles.text }>ESPACIOS NARANJA</Text>
                </TouchableOpacity>      
                <TouchableOpacity style={[styles.buttom, styles.buttom_lila]} >
                    <Text style={styles.text }>CAMPAÑAS DE PREVENCION</Text>
                </TouchableOpacity>      
                <TouchableOpacity style={[styles.buttom, styles.buttom_verde]} >
                    <Text style={styles.text }>ALERTA DE VIOLENCIA</Text>
                </TouchableOpacity> 

                <TouchableOpacity style={[styles.buttom, styles.buttom_morado]} >
                    <Text style={styles.text }>PERSONAS DESAPARECIDAS</Text>
                </TouchableOpacity>      
                <TouchableOpacity style={[styles.buttom, styles.buttom_lila]} >
                    <Text style={styles.text }>INFOGRAFIAS</Text>
                </TouchableOpacity>      
                <TouchableOpacity style={[styles.buttom, styles.buttom_verde]} >
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
})