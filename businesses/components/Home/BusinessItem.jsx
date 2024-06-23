import { View, Text } from 'react-native'
import React from 'react'

export default function BusinessItem({ item }) {
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  )
}