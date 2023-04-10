import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../utilidades/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Home(props){
    const {navigation} = props;

    return(
        <>
            <View style={styles.container}>
                <Button  
                    title={"RED NARANJA"} 
                    icon={"heart"} 
                    buttonStyle={styles.buttom_morado}
                    onPress={() => navigation.navigate("redNaranja")}             

                /> 
                <Button  
                    title={"EMERGENCIAS"} 
                    icon={"ambulance"} 
                    buttonStyle={styles.buttom_lila}
                    onPress={() => navigation.navigate("emergencias")}             
                /> 
                
                <Button  
                    title={"LINEA SIN VIOLENCIA"} 
                    icon={"phone"}
                    buttonStyle={styles.buttom_verde}
                    onPress={() => navigation.navigate("lineas")}  
                /> 
                <Button  
                    title={"ESPACIOS NARANJA"} 
                    icon={"map"} 
                    buttonStyle={styles.buttom_morado}
                    onPress={() => navigation.navigate("espacios")} 
                    
                /> 
                <Button  
                    title={"CAMPAÑAS DE PREVENCION"} icon={"bullhorn"} 
                    buttonStyle={styles.buttom_lila}
                    onPress={() => navigation.navigate("campañas")}
                    
                /> 
                <Button  
                    title={"ALERTA DE VIOLENCIA"} 
                    icon={"alert-circle"} 
                    buttonStyle={styles.buttom_verde}
                    onPress={() => navigation.navigate("alerta")}
                    
                /> 
                <Button  
                    title={"PERSONAS DESAPARECIDAS"} icon={"alert"} 
                    buttonStyle={styles.buttom_morado}
                    onPress={() => navigation.navigate("desaparecidas")}
                /> 
                <Button  
                    title={"INFOGRAFIAS"} 
                    icon={"file"} 
                    buttonStyle={styles.buttom_lila}
                    onPress={() => navigation.navigate("infografias")}
                /> 
                <Button  
                    title={"VIDEOCONFERENCIAS"} 
                    icon={"video"} 
                    buttonStyle={styles.buttom_verde}
                    onPress={() => navigation.navigate("videoconferencias")}
                /> 
            </View>
        </>
    );
}

function Button (props){
    const {title, icon, buttonStyle, onPress } = props; 

    return (
        <TouchableOpacity 
            style={[styles.buttom, buttonStyle]} 
            onPress={onPress}
            >            
            <Icon style={styles.iconContainerStyle } 
                name={icon}  
                size={30} 
                color="#FFFFFF" 
            />
            <Text style={styles.text }>{title}</Text>
        </TouchableOpacity>
    )
}

// const navigateToEmergencias = navigateToScreen('emergencias');
// const navigateToVideoconferencias = navigateToScreen('videoconferencias');
// const navigateToOtraPantalla = navigateToScreen('otraPantalla');


// function navigateToScreen(screenName) {
//     return () => navigation.navigate(screenName);
// }

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
        paddingTop: 30,
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