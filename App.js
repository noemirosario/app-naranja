// import React from 'react';
// import { StyleSheet} from 'react-native';
// import Home from "./src/components/Home";
// import Emergencias from "./src/components/Emergencias";
// import Espacios from "./src/components/Espacios";
// ;

// export default function App(){
//   return (
//     <>
//       <Home/>
//       {/* <Emergencias/> */}
//       {/* <Espacios/> */}
//     </>

//   );  
// }

// const styles = StyleSheet.create({
//   safeArea : {
//     height: 290,
//     alignItems: "center",
//   },
//   menuText: {
//     fontSize: 36,
//   },
// })


import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, SafeAreaView, Text } from "react-native";
import Navigation from "./src/navigation/Navigation";

export default function App(){
  return (
    <NavigationContainer>
      <Navigation>
      </Navigation>
    </NavigationContainer>
  )
}