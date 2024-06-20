import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";

export default function Header() {
  const { user } = useUser();

  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Image source={{ uri: user?.imageUrl }} style={styles.avatar} />
        <View>
          <Text style={styles.congrats}>Welcome,</Text>
          <Text style={styles.userName}>{user.fullName}</Text>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <AntDesign name="search1" size={24} color="black" />
        <TextInput
          placeholder="search..."
          style={styles.input}
          placeholderTextColor={"black"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    paddingBottom: 20,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: Colors.PRIMARY,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  userInfoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  congrats: {
    fontSize: 20,
    color: "white",
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  searchContainer: {
    padding: 12,
    backgroundColor: "white",
    borderRadius: 25,
    marginTop: 24,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  input: {
    fontSize: 20,
    color: Colors.PRIMARY,
    width: "100%",
  },
});
