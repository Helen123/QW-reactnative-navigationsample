import React from "react";
import {StyleSheet, View ,Text} from "react-native";
import ListItem from "../components/ListItem";

function ProfileScreen(props) {
  return (
    <View style={styles.container}>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/favicon.png")}
            title="user name"
            subTitle="some subtitle, like emails"
          />
        </View>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/icon.png")}
            title="my travel plans"
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    flex: 1,
  },
  userContainer: {
    marginVertical: 40,
    backgroundColor: "#6e6969",
  },
});

export default ProfileScreen;