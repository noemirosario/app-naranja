import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  Button,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import colors from './src/utilidades/colors';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App(){
  return (
    // <>
    // <View style={styles.backround}>

    //   <StatusBar barStyle="light-content" />
    //   <SafeAreaView style={styles.safeArea}>
    //     <View >
    //       <Text style={styles.menuText}>Menu</Text>
    //     </View>
    //   </SafeAreaView>
    // </View>
    // </>
    <>
      <View style={styles.container}>
        <TouchableOpacity style={[styles.buttom, styles.buttom_morado]} >
          <Icon name="ios-heart-outline" size={30} color="white" />
          <Text style={styles.text }>RED NARANJA</Text>
        </TouchableOpacity>   

        <TouchableOpacity style={[styles.buttom, styles.buttom_lila]} >
          <Icon name="ambulance" size={30} color="white" />
          <Text style={styles.text }>EMERGENCIAS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttom, styles.buttom_verde]} >
          <Icon name="phone" size={30} color="white" />
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
  safeArea : {
    height: 290,
    alignItems: "center",
  },
  backround: {
    backgroundColor: colors.COLOR_AMARILLO
  },
  menuText: {
    fontSize: 36,

  },

  
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
    paddingTop: 100,
    alignItems: "center",
  }
})