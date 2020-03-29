import React from 'react';
import { View, StyleSheet, TextInput } from "react-native";
import {Feather} from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        marginHorizontal: 15,
        marginTop: 25,
        marginBottom: 25,
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15
    }
});

export default SearchBar;