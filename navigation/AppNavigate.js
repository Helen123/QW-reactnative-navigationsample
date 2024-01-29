import React from "react";
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostScreen from "../app/screens/PostScreen";
import ProfileScreen from "../app/screens/ProfileScreen";
import CreatePostScreen from "../app/screens/CreatePostScreen";

  
  
  const Tab = createBottomTabNavigator();
  
  const AppNavigator = ()=>(
      <Tab.Navigator>
        <Tab.Screen name="Posts" component={PostScreen} />
        <Tab.Screen name="Add Post" component={CreatePostScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>

  );
  export default AppNavigator;