import React from "react";
import { View, StyleSheet, Image,Text } from "react-native";

function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
    {image && <Image style={styles.image} source={image} />}
    <View style={styles.detailsContainer}>
      <Text style={styles.title}>{title}</Text>
      {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: "#000",
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
