import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const SubscriptionDetails = () => {
  const router = useRouter();

    const {id} = useLocalSearchParams<{id:string}>()
  return (
    <View>
      <Text> SubscriptionDetails :{id}</Text>
      <Link  onPress={()=>router.back()}>Go back</Link>
    </View>
  )
}

export default SubscriptionDetails