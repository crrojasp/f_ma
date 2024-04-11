import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Importa el icono de Feather

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        // Aquí puedes implementar la lógica para realizar la búsqueda
        console.log('Búsqueda realizada:', searchQuery);
        // Por ejemplo, puedes enviar la consulta de búsqueda a una API
    };

    const handleAccount = () => {
        // Lógica para manejar el botón de cuenta
        console.log('Botón de cuenta presionado');
    };

    const handleFavorites = () => {
        // Lógica para manejar el botón de favoritos
        console.log('Botón de favoritos presionado');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.searchContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Buscar..."
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    onSubmitEditing={handleSearch}
                />
                <Feather name="search" size={24} color="black" onPress={handleSearch} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleFavorites}>
                <Feather name="heart" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleAccount}>
                <Image source={require('../images/user.jpg')} style={styles.image} />
            </TouchableOpacity>
        </View>
    );
};
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        maxWidth: windowWidth * 0.7,
    },
    input: {
        flex: 1,
        paddingHorizontal: 5,
    },
    button: {
        padding: 10,
    },
    image: {
        width: 24,
        height: 24,
        resizeMode: 'contain', // Ajusta la imagen dentro de su contenedor
    },
});

export default Header;
