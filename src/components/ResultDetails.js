import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ResultDetails = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url }}/>
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        width: 250
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 10,
        marginBottom: 10
    },
    name: {
        fontWeight: "bold",
    }
});

export default ResultDetails;