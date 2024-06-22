import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/config/FirebaseConfig";
import CategoryItem from "./CategoryItem";
import { Colors } from "@/constants/Colors";

export default function Category() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList().then((data) => setCategoryList(data));
  }, []);

  const getCategoryList = async () => {
    const q = query(collection(db, "Category"));
    const querySnapshot = await getDocs(q);

    const output = [];
    querySnapshot.forEach((doc) => output.push(doc.data()));
    return output;
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.header}>Category</Text>
        <Text style={styles.viewall}>View All</Text>
      </View>

      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={categoryList}
        renderItem={({ item, index }) => <CategoryItem category={item} />}
        style={styles.flList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    marginLeft: 12,
    marginRight: 12,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
  },
  viewall: {
    color: Colors.PRIMARY,
    fontWeight: "bold",
  },
  flList: {
    marginTop: 12
  }
});
