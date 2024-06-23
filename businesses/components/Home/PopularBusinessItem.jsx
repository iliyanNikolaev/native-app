import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

export default function PopularBusinessItem({ business }) {
  return (
    <View>
      <Image source={{ uri: business.imageUrl }} style={styles.img} />

      <Text style={styles.name}>{business.name}</Text>
      <Text style={styles.address}>{business.address}</Text>
      <View style={styles.categoryContainer}>
        <Text style={styles.category}>{business.category}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 250,
    height: 120,
    borderRadius: 12,
    objectFit: "cover",
    marginLeft: 12,
    marginRight: 12,
  },
  name: {
    marginLeft: 16,
    marginTop: 6,
    fontWeight: "bold",
  },
  address: {
    marginLeft: 16,
    marginTop: 6,
    fontStyle: "italic",
    color: "grey",
    fontSize: 12,
  },
  categoryContainer: {
    display: "flex",
    alignItems: "flex-end",
    position: "flex-end",
    marginRight: 16,
  },
  category: {
    backgroundColor: Colors.PRIMARY,
    padding: 4,
    color: "white",
    fontWeight: "bold",
    marginTop: 2,
  },
});
