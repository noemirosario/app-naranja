
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import colors from '../utilidades/colors';
import Carousel from 'react-native-snap-carousel';

const infografias = [
    {
        id: 1,
        title: 'Infografía 1',
        image: require('../images/1.jpg'),
        description: 'Descripción de la infografía 1'
    },
    {
        id: 2,
        title: 'Infografía 2',
        image: require('../images/2.jpg'),
        description: 'Descripción de la infografía 2'
    },
  // Agregar más infografías
];

const InfografiasScreen = ({ navigation }) => {

    const renderInfografia = ({ item }) => {
        return (
            <TouchableOpacity >
                <View style={styles.infografiaContainer}>
                    <Image source={item.image} style={styles.infografiaImage} />
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <Carousel
                data={infografias}
                renderItem={renderInfografia}
                sliderWidth={300}
                itemWidth={300}
                layout={'default'}
            />
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.COLOR_VERDE,
        alignItems: 'center',
        justifyContent: 'center',
    },
    infografiaContainer: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    infografiaImage: {
        marginTop: 30,
        width: '100%',
        height: '90%',
        aspectRatio: undefined,
        borderRadius: 10,
    },
});

export default InfografiasScreen;