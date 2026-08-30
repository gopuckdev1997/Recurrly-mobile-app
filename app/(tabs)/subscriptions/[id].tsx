import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const SubscriptionDetails = () => {
  const router = useRouter();

    const {id} = useLocalSearchParams<{id:string}>()
  return (
    <View>
      <Text> SubscriptionDetails :{id}</Text>
      <Text onPress={()=>router.back()}>Go back</Text>
    </View>
  )
}

export default SubscriptionDetails