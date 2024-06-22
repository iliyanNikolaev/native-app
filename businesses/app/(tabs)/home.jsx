import Category from '@/components/Home/Category'
import Header from '@/components/Home/Header'
import PopularBusiness from '@/components/Home/PopularBusiness'
import Slider from '@/components/Home/Slider'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'

export default function Home() {
  return (
    <ScrollView>
      <Header />
      <Slider /> 
      <Category />
      <PopularBusiness />
    </ScrollView>
  )
}
