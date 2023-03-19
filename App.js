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
import Home from "./src/components/Home";
import Emergencias from "./src/components/Emergencias";
import Espacios from "./src/components/Espacios";


export default function App(){
  return (
    <>
      <Home/>
      {/* <Emergencias/> */}
      {/* <Espacios/> */}
    </>

  );  
}

const styles = StyleSheet.create({
  safeArea : {
    height: 290,
    alignItems: "center",
  },
  menuText: {
    fontSize: 36,
  },
})