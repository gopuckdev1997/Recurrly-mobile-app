import '@/global.css';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
   //  <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Stack screenOptions={{ headerShown: false }} />
   //  </SafeAreaView>
  );
}
