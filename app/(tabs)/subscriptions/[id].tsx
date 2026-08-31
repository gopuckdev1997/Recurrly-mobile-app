import { useLocalSearchParams, useRouter } from 'expo-router'
import { styled } from 'nativewind'
import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context'


const SafeAreaView = styled(RNSafeAreaView)

const SubscriptionDetails = () => {
  const router = useRouter();

    const {id} = useLocalSearchParams<{id:string}>()
  return (
    <SafeAreaView className='flex-1  bg-background p-5'>
      <Text> SubscriptionDetails :{id}</Text>
      <Text onPress={()=>router.back()}>Go back</Text>
    </SafeAreaView>
  )
}

export default SubscriptionDetails