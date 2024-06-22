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

  const onCategoryPress = (category) => {
    console.log(category)
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.header}>Category</Text>
      </View>

      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={categoryList}
        renderItem={({ item, index }) => 
          <CategoryItem category={item} 
          key={index}
          onCategoryPress={onCategoryPress}
        />}
        style={styles.flList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 12,
    marginLeft: 12,
    marginRight: 12,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
  },
  flList: {
    marginTop: 12
  }
});
