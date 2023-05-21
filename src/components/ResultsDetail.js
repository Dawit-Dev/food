import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ResultsDetail = ({ result }) => {
  return (
      <View>
          <Image style={styles.image} source={{ uri: result.image_url }} />
          <Text style={styles.name}>{result.name}</Text>
          <Text>{result.rating} Starts, {result.review_count} Reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 6
    },
    name: {
        fontWeight: 'bold',
        fontSize: 15
    }
})

export default ResultsDetail
