import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import CarouselRecomended from './CarouselRecomendedPets';

const Main = () => {
    return (
        
            <View style={styles.container}>
                <Header></Header>
                <CarouselRecomended/>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
});

export default Main;