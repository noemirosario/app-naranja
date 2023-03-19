import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Linking } from 'react-native'
import colors from '../utilidades/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Emergencias(){
    const policia = () => {
        Linking.openURL('tel:066');
    }
    const cruz_roja = () => {
        Linking.openURL('tel:065');
    }

    return(
        <>
            <View style={styles.viewEmergencia}>
                <Text style={styles.menuText }>Lineas de EMERGENCIAS</Text>

                <View style={styles.viewNumbers }>
                    <TouchableOpacity onPress={policia}>
                        <Icon style={styles.iconContainerStyle } name="police-badge" size={30} color="#FFFFFF" />
                    </TouchableOpacity>
                    <Text style={styles.textNumber}>POLICIA</Text>


                    <TouchableOpacity onPress={cruz_roja}>
                        <Icon name="ambulance" size={30} color="#FFFFFF" />
                    </TouchableOpacity>
                    <Text style={styles.textNumber}>CRUZ ROJA</Text>
                </View> 
                
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    viewEmergencia: {
        flex: 1,
        backgroundColor: colors.COLOR_AMARILLO,
        paddingTop: 50,
        alignItems: "center",
    },
    textNumber: {
        marginTop: 20,
        // color: colors.COLOR_BLANCO,
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    textTittle: {
        fontSize: 20,
        color: '#ffff',
        marginTop: 10,
        backgroundColor: colors.COLOR_AMARILLO,
        fontFamily: 'inter-font',
    },

    menuText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.COLOR_LILA,
        paddingBottom: 20,
    },

    viewNumbers:{
        paddingTop: 90,
        alignItems: "center",
        justifyContent: 'center',
    }
})