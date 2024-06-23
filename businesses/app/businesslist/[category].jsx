import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/config/FirebaseConfig";
import { FlatList } from "react-native";
import BusinessItem from "@/components/Home/BusinessItem";

export default function BusinessListByCat() {
  const [businessList, setBusinessList] = useState([]);

  const navigation = useNavigation();

  const { category } = useLocalSearchParams();

  const getBusinessListByCat = async () => {
    const q = query(collection(db, "Business"), where("category", "==", category));
    const querySnapshot = await getDocs(q);
    const output = [];
    querySnapshot.forEach((doc) => output.push(doc.data()));
    return output;
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: category,
    });

    getBusinessListByCat().then(data => setBusinessList(data));
  }, [category]);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={businessList}
        renderItem={({ item, index }) => (
          <BusinessItem item={item} key={index} />
        )}
        style={styles.flList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flList: {
    padding: 10,
  },
});
