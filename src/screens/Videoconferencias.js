import { View, Text, StyleSheet, TouchableOpacity, Linking, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import colors from '../utilidades/colors'

const videos = [
    {
        id: 'OG3bFqkUalQ',
        title: 'Día Internacional de la Eliminación de la Violencia contra la Mujer | DÍA NARANJA #EnTrending',
        duration: '26:24',
    },
    {
        id: 'hcWed-YcpTM',
        title: 'Día Naranja - TecNM',
        duration: '02:01',
    },
    {
        id: 'AHm48BQ6HwY',
        title: '¿Qué es la Violencia de género? Principios para la Atención a víctimas con Perspectiva de Género ',
        duration: '1:55:32',
    },
    {
        id: 'nbTPf5yK8GI',
        title: 'La importancia de las masculinidades en la prevención de la violencia de género, 1ª. Parte',
        duration: '2:05:04',
    },
    {
        id: 'oS2kL-yhlvM',
        title: 'Día Naranja - Ignorar',
        duration: '0:40',
    },
    {
        id: '3Zo16D5Qeu8',
        title: 'Campaña de la ONU para poner fin a la violencia contra las mujeres y niñas',
        duration: '07:24',
    },
    {
        id: 'gHA8oPEoSVE',
        title: 'Día Naranja, acciones para erradicar la violencia en el PJCDMX. Capítulo 1',
        duration: '05:24',
    },
    {
        id: 'Lcr8H-RKCHg',
        title: 'Día Naranja, acciones para erradicar la violencia en el PJCDMX. Capítulo 2',
        duration: '05:16',
    },
];

const VideoCard = ({ item }) => {
    const handlePress = () => {
        Linking.openURL(`https://www.youtube.com/watch?v=${item.id}`);
    };

    return (
        <View style={styles.content}>
            <TouchableOpacity style={styles.card} onPress={handlePress}>
            <View style={styles.thumbnailContainer}>
                <Image
                source={{ uri: `https://img.youtube.com/vi/${item.id}/hqdefault.jpg` }}
                style={styles.thumbnail}
                />
                <View style={styles.playButton}>
                <Text style={styles.playButtonText}>PLAY</Text>
                </View>
            </View>
            <View style={styles.info}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.duration}>{item.duration}</Text>
            </View>
            </TouchableOpacity>
        </View>
    );
};

const VideoScreen = () => {
    const renderVideo = ({ item }) => {
        return <VideoCard item={item} />;
    };

    return (
        <View style={styles.container}>
        <Carousel
            data={videos}
            renderItem={renderVideo}
            sliderWidth={350}
            itemWidth={280}
            loop={true}
            autoplay={true}
            autoplayInterval={5000}
            enableSnap={true}
            lockScrollWhileSnapping={true}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.COLOR_LILA,
        paddingTop: 70,
    },
    content: {
        // flex: 1,
        // justifyContent: 'center',
         // centra verticalmente el contenido
    },
    card: {
        backgroundColor: colors.COLOR_BLANCO,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        padding: 10,
        marginHorizontal: 10,
        marginBottom: 10,
        height: 400,
    },
    thumbnailContainer: {
        position: 'relative',
    },
    thumbnail: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    playButton: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{ translateX: -40 }, { translateY: -40 }],
    },
    playButtonText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    info: {
        paddingVertical: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    duration: {
        fontSize: 16,
        color: '#999',
    },
});

export default VideoScreen;
