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
        flex: 1
      }}>
        <View style={{
          backgroundColor: "gold",
          flex: 2
        }}></View>
        <View style={{
          backgroundColor: "dodgerblue",
          flex: 1
        }}></View>
        <View style={{
          backgroundColor: "tomato",
          flex: 1
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
