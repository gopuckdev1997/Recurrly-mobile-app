import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const index = () => {
  return (
    <View className='flex-1 items-center justify-center font-bold bg-accent '  >
      <Text className='text-2xl font-bold'>Welocme to Recurrly App</Text>
      <Link href="/(tabs)" className='text-blue-500 rounded-full h-auto p-4 mt-7 bg-primary text-white text-3xl'>
        Go to Home
      </Link>
    </View>
  )
}

export default index