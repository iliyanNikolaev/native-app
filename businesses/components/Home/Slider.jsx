import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { db } from "@/config/FirebaseConfig";
import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Slider() {
  const [sliderList, setSliderList] = useState([]);

  useEffect(() => {
    getSliderList().then(data => setSliderList(data));
  }, []);

  const getSliderList = async () => {
    const q = query(collection(db, "Slider"));
    const querySnapshot = await getDocs(q);
    const output = [];
    querySnapshot.forEach(doc => output.push(doc.data()));
    return output;
  };

  return (
    <View>
      <Text style={styles.special}>#Special for you</Text>

      <FlatList
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Image
            source={{ uri: item.imageUrl }}
            style={styles.img}
          />
        )}
        style={styles.flList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  special: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 12,
    marginTop: 12,
  },
  img: {
    width: 300,
    height: 160,
    marginRight: 6,
    marginLeft: 6,
    borderRadius: 12,
    objectFit: 'cover'
  },
  flList: {
    marginTop: 12 
  }
});
