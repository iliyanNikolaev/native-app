import Category from '@/components/Home/Category'
import Header from '@/components/Home/Header'
import Slider from '@/components/Home/Slider'
import React from 'react'
import { Text, View } from 'react-native'

export default function Home() {
  return (
    <View>
      <Header />
      <Slider /> 
      <Category />
    </View>
  )
}
