import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {

    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result)
        return null;

    return (
        <View>
            <Text style={styles.text}>{result.name}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item}} />;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width:200,
        height: 300,
        marginHorizontal: 10,
        borderRadius: 10
    },
    text: {
        fontWeight: "bold",
        alignSelf: "center",
        fontSize: 30,
        marginVertical: 30
    }
});

export default ResultsShowScreen;