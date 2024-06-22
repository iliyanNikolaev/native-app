import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

export default function CategoryItem({ category, onCategoryPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onCategoryPress(category)}>
        <Image source={{ uri: category.icon }} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.name}>{category.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    width: 54,
    height: 54,
    marginLeft: 8,
    marginRight: 8,
  },
  name: {
    fontSize: 10,
    color: Colors.PRIMARY,
    fontWeight: "bold",
  },
});
