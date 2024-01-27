import React from "react";
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function PostsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>all Posts</Text>
      </View>
    );
  }
  
  function ProfileScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>where login profiles and settings go</Text>
      </View>
    );
  }
  
  const Tab = createBottomTabNavigator();
  
  const OtherNavigator = ()=>(
      <Tab.Navigator>
        <Tab.Screen name="Posts" component={PostsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>

  );
  export default OtherNavigator;
