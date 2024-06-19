import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { Colors } from "@/constants/Colors";

export default function Header() {
  const { user } = useUser();

  return (
    <View style={styles.container}>
      <Image source={{ uri: user?.imageUrl }} style={styles.avatar} />
      <View>
        <Text style={styles.congrats}>Welcome, </Text>
        <Text style={styles.userName}>{user.fullName}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    paddingBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: Colors.PRIMARY
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  congrats: {
    fontSize: 20,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
