import '@/global.css';
import { Link } from 'expo-router';
import { SafeAreaView, Text, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to my app!
      </Text>
      <View className='text-center flex'>
      <Link href={"/onboarding"} className='mt-7 bg-primary  text-white rounded h-auto p-1'>Go to onboarding</Link>
      <Link href={"/(auth)/sign-in"} className='mt-7 bg-primary text-center text-white rounded h-auto p-1'>Sign in</Link>
      <Link href={"/(auth)/sign-up"} className='mt-7 bg-primary text-center text-white rounded h-auto p-1'>Sign up</Link>

       {/* <Link href="/(tabs)/subscriptions" className='mt-7 bg-primary text-center text-white rounded h-auto p-1'>Spotify Subscription</Link> */}
      <Link
  href={"/(tabs)/subscriptions/spotifySubscription"}
  className="mt-7 bg-primary text-center text-white rounded h-auto p-1"
>
  Claude dum
</Link>

<Link
  href={{
    pathname: "/(tabs)/subscriptions/[id]",
    params: { id: "claude" },
  }}
  className="mt-7 bg-primary text-center text-white rounded h-auto p-1"
>
  claude
</Link>

      </View>
    </View>
    </SafeAreaView>
  );
}
