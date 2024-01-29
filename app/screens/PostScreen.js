import React from "react";
import {StyleSheet, View ,Text} from "react-native";


function PostScreen(props) {
  return (
    <View style={styles.container}>
      <Text>where posts goes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    flex: 1,
  },
});

export default PostScreen;