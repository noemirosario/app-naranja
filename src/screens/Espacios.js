import React from 'react';
import { View, Text, Linking, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../utilidades/colors'

const Espacios = () => {
  const openMapLink = () => {
    Linking.openURL('https://www.google.com/maps/d/viewer?mid=1DDfxmJV7Cmsqdlr6S7Ll7fBtXv0al1zs&ll=19.52788214253435%2C-99.18801069726909&z=16');
  }

  return (
    <View style={styles.contenedor}>
    <Image source={{uri: 'https://i0.wp.com/asisucede.com.mx/wp-content/uploads/2021/01/Espacio-naranja-seguro.png?fit=350%2C442&ssl=1'}} style={styles.img} />

    <View style={styles.contenedorInfo}>
        <Text style={styles.info}>
            "En el Estado de México existen 5 mil 123 establecimientos que se han convertido en un 'Espacio Seguro, Espacio Naranja', un programa que implementa la Secretaría de Las Mujeres de la entidad desde marzo del 2021 y que busca ayudar a prevenir agresiones por cuestión de género. En cualquier giro comercial que cuente con este distintivo, las mujeres encontrarán un sitio de resguardo, apoyo y auxilio." 
        </Text>

        <Text style={{textAlign: 'center', paddingTop: 15}}>
            Fuente: 
            <Text style={{color: 'blue'}} onPress={() => Linking.openURL('https://www.eluniversal.com.mx/edomex/implementan-mas-de-5-mil-espacios-naranja-en-el-edomex-buscan-prevenir-violencia-de-genero/')}> El Universal</Text>
        </Text>
        

        <View style={styles.viewBtn}>
            <TouchableOpacity 
                style={styles.btnMap}
                onPress={openMapLink}
                >
                <Text style={styles.text}>Ver en el mapa</Text>
            </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        paddingTop: 15,
        alignItems: "center", 
        backgroundColor: colors.COLOR_VERDE,
    },
    info : {
        fontSize: 20, 
        marginTop: 20, 
        textAlign: 'justify',
    },
    img: {
        width: 200,
        height: 250,
        borderRadius:30,
    },
    contenedorInfo:{
        alignItems: 'stretch', 
        marginHorizontal: 20, 
    },
    btnMap: {
        flexDirection: 'row',
        padding: 10,
        borderRadius: 30,
        alignItems: "center",
        marginVertical: 30,
        marginTop: 20, 
        width: 200,
        backgroundColor: colors.COLOR_AMARILLO,
        justifyContent: 'center', // añadir esta propiedad
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: "center",
        color: colors.COLOR_BLANCO,
    },
    viewBtn: {
        alignItems: 'center', 
        justifyContent: 'center'
    }
});
    

export default Espacios;
