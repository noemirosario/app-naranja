import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../utilidades/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { createStackNavigator } from '@react-navigation/stack';
import Emergencias from './Emergencias'



export default function Home(props){
    return(
        <>
            <View style={styles.container}>
                <Text style={styles.menuText}>Menu</Text>

                <Button  
                    title={"RED NARANJA"} icon={"heart"} buttonStyle={styles.buttom_morado}
                /> 
                <Button  
                    title={"EMERGENCIAS"} icon={"ambulance"} buttonStyle={styles.buttom_lila}
                /> 
                <Button  
                    title={"LINEA SIN VIOLENCIA"} icon={"phone"} buttonStyle={styles.buttom_verde}
                /> 
                <Button  
                    title={"ESPACIOS NARANJA"} icon={"map"} buttonStyle={styles.buttom_morado}
                /> 
                <Button  
                    title={"CAMPAÑAS DE PREVENCION"} icon={"bullhorn"} buttonStyle={styles.buttom_lila}
                /> 
                <Button  
                    title={"ALERTA DE VIOLENCIA"} icon={"alert-circle"} buttonStyle={styles.buttom_verde}
                /> 
                <Button  
                    title={"PERSONAS DESAPARECIDAS"} icon={"alert"} buttonStyle={styles.buttom_morado}
                /> 
                <Button  
                    title={"INFOGRAFIAS"} icon={"file"} buttonStyle={styles.buttom_lila}
                /> 
                <Button  
                    title={"VIDEOCONFERENCIAS"} icon={"video"} buttonStyle={styles.buttom_verde}
                /> 
            </View>
        </>
    );
}

function Button (props){
    const {title, icon, buttonStyle } = props; 

    return (
    <TouchableOpacity style={[styles.buttom, buttonStyle]} >
        <Icon style={styles.iconContainerStyle } name={icon}  size={30} color="#FFFFFF" />
        <Text style={styles.text }>{title}</Text>
    </TouchableOpacity>
    )
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