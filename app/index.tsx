import { Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Platform,
  StatusBar,
  Dimensions,
  Alert } from "react-native";
import { StyleSheet } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks'

export default function Index() {
  console.log("Reload:", Dimensions.get("screen"))
  const orientation = useDeviceOrientation();
  console.log("orientation:", orientation)
  const handlePress = () => Alert.alert("my title", "My message", [
    { text:"Yeees", onPress: () => console.log("Yes")},
    { text:"No", onPress: () => console.log("No") }
  ]);
  const handleLongPress = () => console.log("Long click");
  
  let imgPath = "../assets/images/icon.png";
  let imgUrl = "https://picsum.photos/200/300";

  //<Image style={styles.img} source={require(imgPath)} />
  return (
      <View style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row", // Sets main axis
        justifyContent: "center", // Justifies on main axis
        alignItems: "center" // Justifies in secondary axis
      }}>
        <View style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 300,
          alignSelf: "flex-start"
        }}></View>
        <View style={{
          backgroundColor: "gold",
          width: 100,
          height: 200
        }}></View>
        <View style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100
        }}></View>
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  img :{}
});
