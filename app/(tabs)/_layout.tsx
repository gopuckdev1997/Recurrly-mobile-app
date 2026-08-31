import { Tabs } from 'expo-router';
import { Image, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { tabs } from '../constants/data';

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  const TabIcon =({focused,icon}:{focused:boolean,icon:any})=>{
    return (
      <View>
        <Image
          source={icon}
          className={`w-6 h-6 ${focused ?
             '   w-8 h-8 '
              : 'opacity-50 '}
              
              
              `}
              resizeMode='contain'
        />
      </View>
    )
  }
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute', 
          bottom: Math.max(insets.bottom, 10), // Ensure a minimum bottom margin
          borderRadius: 30, // Rounded corners
          backgroundColor: 'black', // Light background color
          elevation: 5, // Elevation for Android
          height: Math.max( 60), // Set a fixed height for the tab bar
          left: Math.max(insets.left, 10), // Ensure a minimum left margin
          right: Math.max(insets.right, 10), // Ensure a minimum right margin
          paddingBottom: Math.max(insets.bottom, 10), // Ensure a minimum bottom padding
          paddingTop: 5, // Padding at the top
          
          

        },

        tabBarShowLabel: false, // Hide the label

        
      }}

    >
      {/* <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="subscriptions" options={{ title: 'Subscriptions' }} />
      <Tabs.Screen name="insights" options={{ title: 'Insights' }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
      <Tabs.Screen name="subscriptions/[id]" options={{ href:null }} /> */}
      {tabs?.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
       
          options={{ 
            tabBarBadge: tab.name === 'insights' ? 7 : undefined,
            title: tab.title,
            tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={tab.icon} />,
          }}
        />
      ))}

    </Tabs>
  );
}