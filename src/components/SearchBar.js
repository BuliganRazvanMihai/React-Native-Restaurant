import React from 'react';
import { View,TextInput, Text, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput style={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
             placeholder="Search" 
             value={term}
             onChangeText={newTerm => onTermChange(newTerm)}
             onEndEditing = {() => onTermSubmit()}
             />
        </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#3E37B9',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
        fontSize: 18,
        flex: 1
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;