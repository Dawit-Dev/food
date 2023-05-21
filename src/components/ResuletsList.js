import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResuletsList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 3,
  },
  container: {
    marginBottom: 15,
  },
});

export default ResuletsList;
