import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';

export default function CategoryItem({ category }) {
  return (
    <View style={styles.container}>
          <Image
            source={{ uri: category.icon }}
            style={styles.icon}
          />
      <Text style={styles.name}>{category.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  icon: {
    width: 54,
    height: 54,
    marginLeft: 6,
    marginRight: 6
  },
  name: {
    fontSize: 10,
    color: Colors.PRIMARY,
    fontWeight: 'bold'
  }
});