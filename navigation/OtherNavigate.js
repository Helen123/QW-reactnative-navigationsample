import React from "react";
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../app/screens/LoginScreen";
import PostScreen from "../app/screens/PostScreen";

  
  
  const Tab = createBottomTabNavigator();
  
  const OtherNavigator = ()=>(
      <Tab.Navigator>
        <Tab.Screen name="Posts" component={PostScreen} />
        <Tab.Screen name="About me" component={LoginScreen} />
      </Tab.Navigator>

  );
  export default OtherNavigator;
