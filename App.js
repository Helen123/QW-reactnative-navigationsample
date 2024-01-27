import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect} from "react";
import { NavigationContainer} from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigate";
import OtherNavigator from "./navigation/OtherNavigate";


export default function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // This will run only once, when the component is mounted
    setUser("something");
  }, []);
  return (
    <NavigationContainer>
        {user ? (
          <AppNavigator />
        ) : (
          <OtherNavigator />
        )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
