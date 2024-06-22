import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/config/FirebaseConfig";
import PopularBusinessItem from "./PopularBusinessItem";

export default function PopularBusiness() {
    const [popularBusinessList, setPopularBusinessList] = useState([]);
    
    useEffect(() => {
        getBusinessList().then(data => {
            setPopularBusinessList(data)
            console.log(data);
        }).catch(err => console.log(err));
    }, []);
    
    const getBusinessList = async () => {
        const q = query(collection(db, "Business"));
    const querySnapshot = await getDocs(q);

    const output = [];
    querySnapshot.forEach((doc) => output.push(doc.data()));
    return output;
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.header}>Popular business</Text>
        <Text style={styles.viewall}>View All</Text>
      </View>

      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={popularBusinessList}
        renderItem={({ item, index }) => 
          (
            <PopularBusinessItem business={item}/>
          )}
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
    marginTop: 24,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 12
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
  },
  viewall: {
    color: Colors.PRIMARY,
    fontWeight: "bold",
  },
  flList: {
    gap: 5
  }
});
