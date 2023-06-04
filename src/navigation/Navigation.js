import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import colors from '../utilidades/colors'

import Home from "../screens/Home";
import RedNaranja from "../screens/RedNaranja";
import Emergencias from "../screens/Emergencias";
import Lineas from "../screens/Lineas";
import Espacios from "../screens/Espacios";
import Campañas from "../screens/Campañas";
import Alerta from "../screens/Alerta";
import Desaparecidas from "../screens/Desaparecidas";
import Infografias from "../screens/Infografias";
import Videoconferencias from "../screens/Videoconferencias";
import SplashScreen from "../screens/SplashScreen";


const Stack = createStackNavigator();

export default function Navigation () {
    return (
        <Stack.Navigator>

            {/* <Stack.Screen
                name="Splash"
                component={SplashScreen}
                options={{ headerShown: false }}
            /> */}

            <Stack.Screen 
                name="home" 
                component={Home} 
                options={{
                    title: 'Menú ', 
                    headerStyle: {
                        backgroundColor: colors.COLOR_AMARILLO,
                        height: 90
                    },
                    headerTintColor: '#FFFFFF',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontSize: 30,
                        fontWeight: 'bold',
                    },
                    headerTitleContainerStyle: {
                        paddingTop: 40,
                    },
                }} />

            <Stack.Screen 
                name="redNaranja" 
                component={RedNaranja} 
                options={{
                    title: 'Red Naranja',
                    headerStyle: {
                        backgroundColor: colors.COLOR_LILA,
                        height: 80
                    },
                    // color text
                    headerTintColor: '#FFFFFF',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontSize: 25,
                        fontWeight: 'bold',
                    },
                    headerTitleContainerStyle: {
                        paddingTop: 10,
                    },
                    // hace que queden a la misma altura
                    headerLeftContainerStyle: {
                        paddingTop: 10,
                    }
                }} 
            />

            <Stack.Screen 
                name="emergencias" 
                component={Emergencias} 
                options={{
                    headerTitle: 'Lineas de emergencias',
                    headerStyle: {
                        backgroundColor: colors.COLOR_AMARILLO,
                        height: 80
                    },
                    // color text
                    headerTintColor: '#FFFFFF',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontSize: 25,
                        fontWeight: 'bold',
                    },
                    headerTitleContainerStyle: {
                        paddingTop: 10,
                    },
                    // hace que queden a la misma altura
                    headerLeftContainerStyle: {
                        paddingTop: 10,
                    }
                }} />

            <Stack.Screen 
                name="lineas" 
                component={Lineas} 
                options={{
                    title: 'Linea sin violencia',
                    headerStyle: {
                        backgroundColor: colors.COLOR_MORADO,
                        height: 60,
                    },
                    // color text
                    headerTintColor: '#FFFFFF',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontSize: 25,
                        fontWeight: 'bold',
                    },
                    headerTitleContainerStyle: {
                        paddingTop: 10,
                    },
                    // hace que queden a la misma altura
                    headerLeftContainerStyle: {
                        paddingTop: 10,
                    }
                }} 
            />

            <Stack.Screen 
                name="espacios" 
                component={Espacios} 
                options={{
                    title: 'Espacios Naranja',
                    headerStyle: {
                        backgroundColor: colors.COLOR_VERDE,
                        height: 80
                    },
                    // color text
                    headerTintColor: '#FFFFFF',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontSize: 25,
                        fontWeight: 'bold',
                    },
                    headerTitleContainerStyle: {
                        paddingTop: 10,
                    },
                    // hace que queden a la misma altura
                    headerLeftContainerStyle: {
                        paddingTop: 10,
                    }
                    }} />

            <Stack.Screen
                name="campañas" 
                component={Campañas} 
                options={{
                    title: 'Campañas de Prevencion',
                    headerStyle: {
                        backgroundColor: colors.COLOR_LILA,
                        height: 80
                    },
                    // color text
                    headerTintColor: '#FFFFFF',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontSize: 25,
                        fontWeight: 'bold',
                    },
                    headerTitleContainerStyle: {
                        paddingTop: 10,
                    },
                    // hace que queden a la misma altura
                    headerLeftContainerStyle: {
                        paddingTop: 10,
                    }
                    }} />

            <Stack.Screen 
                name="alerta" 
                component={Alerta} 
                options={{
                    title: 'Alerta de violencia',
                    headerStyle: {
                        backgroundColor: colors.COLOR_AMARILLO,
                        height: 80
                    },
                    // color text
                    headerTintColor: '#FFFFFF',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontSize: 25,
                        fontWeight: 'bold',
                    },
                    headerTitleContainerStyle: {
                        paddingTop: 10,
                    },
                    // hace que queden a la misma altura
                    headerLeftContainerStyle: {
                        paddingTop: 10,
                    }
                    }} />

            <Stack.Screen 
                name="desaparecidas" 
                component={Desaparecidas} 
                options={{
                    title: 'Personas Desaparecidas',
                    headerStyle: {
                        backgroundColor: colors.COLOR_MORADO,
                        height: 80
                    },
                    // color text
                    headerTintColor: '#FFFFFF',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontSize: 25,
                        fontWeight: 'bold',
                    },
                    headerTitleContainerStyle: {
                        paddingTop: 10,
                    },
                    // hace que queden a la misma altura
                    headerLeftContainerStyle: {
                        paddingTop: 10,
                    }
                    }} />
            
            <Stack.Screen 
                name="infografias" 
                component={Infografias} 
                options={{
                    title: 'Infografias',
                    headerStyle: {
                        backgroundColor: colors.COLOR_VERDE,
                        height: 60,
                    },
                    // color text
                    headerTintColor: '#FFFFFF',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontSize: 25,
                        fontWeight: 'bold',
                    },
                    headerTitleContainerStyle: {
                        paddingTop: 10,
                    },
                    // hace que queden a la misma altura
                    headerLeftContainerStyle: {
                        paddingTop: 10,
                    }
                    
                    }} />
            
            <Stack.Screen 
                name="videoconferencias" 
                component={Videoconferencias} 
                options={{
                    title: 'Videoconferencias',
                    headerStyle: {
                        backgroundColor: colors.COLOR_LILA,
                        height: 60,
                    },
                    // color text
                    headerTintColor: '#FFFFFF',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontSize: 25,
                        fontWeight: 'bold',
                    },
                    headerTitleContainerStyle: {
                        paddingTop: 10,
                    },
                    // hace que queden a la misma altura
                    headerLeftContainerStyle: {
                        paddingTop: 10,
                    }
                    }} />
        </Stack.Navigator>    
    )
}

// const Tab = createBottomTabNavigator();

// export default function Navigation () {
//     return(
//         <Tab.Navigator>
//             <Tab.Screen name="home" component={HomeStack} options={{title: 'home 1'}} />

//             <Tab.Screen name="contact" component={ContactStack} options={{title: 'contact'}} /> 
//             <Tab.Screen name="redNaranja" component={RedNaranja} options={{title: 'Red Naranja'}} /> 
//             <Tab.Screen name="emergencias" component={Emergencias} options={{title: 'Emergencias'}} /> 
//             <Tab.Screen name="lineas" component={Lineas} options={{title: 'Lineas'}} /> 
//             <Tab.Screen name="espacios" component={Espacios} options={{title: 'Espacios'}} /> 
//             <Tab.Screen name="campañas" component={Campañas} options={{title: 'Campañas'}} /> 
//             <Tab.Screen name="desaparecidas" component={Desaparecidas} options={{title: 'Desaparecidas'}} /> 
//             <Tab.Screen name="infografias" component={Infografias} options={{title: 'Infografias'}} /> 
//             <Tab.Screen name="videoconferencias" component={Videoconferencias} options={{title: 'Videoconferencias'}} /> 
//         </Tab.Navigator>
//     )
// }
   
// import React from "react";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import Home1 from "../screens/Home1";
// import Contact from "../screens/Contact";

// const Drawer = createDrawerNavigator();

// export default function Navigation () {
//     return (
//         <Drawer.Navigator>
//             <Drawer.Screen name="home1" component={Home1} options={{title: 'home 1'}} />
//         </Drawer.Navigator>
//     )
// }