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
        <Text>where profiles, settings, logoutbutton go</Text>
      </View>
    );
  }
  function CreatePostsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>where user can create and edit their post</Text>
      </View>
    );
  }
  
  const Tab = createBottomTabNavigator();
  
  const AppNavigator = ()=>(
      <Tab.Navigator>
        <Tab.Screen name="Posts" component={PostsScreen} />
        <Tab.Screen name="Add Post" component={CreatePostsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>

  );
  export default AppNavigator;