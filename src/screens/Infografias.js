import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Modal, ScrollView, Text } from 'react-native';
import colors from '../utilidades/colors'

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
    {
        id: 3,
        title: 'Infografía 3',
        image: require('../images/3.jpg'),
        description: 'Descripción de la infografía 2'
    },
    {
        id: 4,
        title: 'Infografía 4',
        image: require('../images/4.jpg'),
        description: 'Descripción de la infografía 2'
    },
    {
        id: 5,
        title: 'Infografía 5',
        image: require('../images/5.jpg'),
        description: 'Descripción de la infografía 2'
    },
    {
        id: 6,
        title: 'Infografía 6',
        image: require('../images/6.jpg'),
        description: 'Descripción de la infografía 2'
    },
    {
        id: 7,
        title: 'Infografía 7',
        image: require('../images/7.jpg'),
        description: 'Descripción de la infografía 2'
    },
];

function Infografia({ infografia, onOpenModal }) {
    return (
        <TouchableOpacity onPress={() => onOpenModal(infografia)}>
            <Image source={infografia.image} style={styles.image} />
            <Text style={styles.title}>{infografia.title}</Text>
        </TouchableOpacity>
    );
}

function InfografiasGallery() {
    const [selectedInfografia, setSelectedInfografia] = useState(null);

    const handleOpenModal = (infografia) => {
        setSelectedInfografia(infografia);
    };

    const handleCloseModal = () => {
        setSelectedInfografia(null);
    };

    return (
        <View style={styles.container}>
        <ScrollView>
            {infografias.map((infografia) => (
            <Infografia
                key={infografia.id}
                infografia={infografia}
                onOpenModal={handleOpenModal}
            />
            ))}
        </ScrollView>

        <Modal visible={!!selectedInfografia} transparent={true}>
            <TouchableOpacity
            onPress={handleCloseModal}
            style={styles.modalContainer}
            >
            <View style={styles.modalContent}>
                {selectedInfografia && (
                <View>
                    <Image
                    source={selectedInfografia.image}
                    style={styles.modalImage}
                    />
                    <Text style={styles.modalTitle}>
                    {selectedInfografia.title}
                    </Text>
                    <Text style={styles.modalDescription}>
                    {selectedInfografia.description}
                    </Text>
                </View>
                )}
            </View>
            </TouchableOpacity>
        </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.COLOR_VERDE,
        paddingTop: 15,
        paddingHorizontal: 20,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
    },
    modalImage: {
        width: 300,
        height: 300,
        marginBottom: 10,
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalDescription: {
        fontSize: 16,
        marginBottom: 10,
    },
});



export default InfografiasGallery;
