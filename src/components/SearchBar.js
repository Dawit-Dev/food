import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
  return (
      <View style={styles.backgroundStyle}>
          <Feather name="search" style={styles.iconStyel} />
          <TextInput style={styles.inputStyle} placeholder="Search" />
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 12,
    margin: 12,
    flexDirection: "row",
  },
  inputStyle: {
    // borderColor: "black",
    // borderWidth: 3,
      flex: 1,
      fontSize: 21
    },
    iconStyel: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
  }
});

export default SearchBar