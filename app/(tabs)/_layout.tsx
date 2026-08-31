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
          className={`w-6 h-6  ${focused ?
             '   w-8 h-8   '
              : 'opacity-50 '}
              
              
              `}
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
          height: 50, // Set a fixed height for the tab bar
          paddingTop: 30, // Add some margin at the top

        },

        tabBarShowLabel: false, // Hide the label
        tabBarIconStyle: {
          paddingTop: Math.max(insets.top, 10), // Add some padding at the top
        },
        
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
            tabBarBadge: tab.name === 'insights' ? 3 : undefined,
            title: tab.title,
            tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={tab.icon} />,
          }}
        />
      ))}

    </Tabs>
  );
}