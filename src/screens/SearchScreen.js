import React, { useState } from 'react';
import { View, StyleSheet, Text } from "react-native";
// Components
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
// Hooks
import useResults from '../hooks/useResults';
import { ScrollView } from 'react-native-gesture-handler';

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchAPI, errorMessage, results] = useResults();

    const filterResultsByPrice = (price) => {
        // price = '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <View style={styles.background}>
            <SearchBar
                style={styles.searchBar}
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchAPI(term)}
            />
            {errorMessage ? <Text style={styles.text}>{errorMessage}</Text> : null}
            {/*<Text style={styles.text}>We have found {results.length} results.</Text>*/}
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title="Cost Effective"/>
                <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricer"/>
                <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender"/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        flex: 1
    },
    text: {
        marginVertical: 10,
        marginHorizontal: 20
    }
});

export default SearchScreen;