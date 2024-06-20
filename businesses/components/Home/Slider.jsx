import { View, Text, StyleSheet } from "react-native";
import { db } from "@/config/FirebaseConfig";
import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Slider() {
  const [sliderList, setSliderList] = useState([]);

  useEffect(() => {
    getSliderList();
  }, []);

  const getSliderList = async () => {
    const q = query(collection(db, "Slider"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) =>
      setSliderList((prev) => [...prev, doc.data()])
    );
  };

  return (
    <View>
      <Text style={styles.special}>#Special for you</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  special: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 12,
    marginTop: 12
  }
});
