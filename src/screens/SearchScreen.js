import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import Yelp from "../api/Yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMassage] = useState('');

  const searchApi = async () => {
    try {
      const response = await Yelp.get('/search', {
      params: {
        limit: 50,
        term,
        location: 'san jose'
      }
    });
      setResults(response.data.businesses)
    } catch (err) {
      setErrorMassage('Something went wrong');
    }
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchApi}
      />
      {errorMessage ?  <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
