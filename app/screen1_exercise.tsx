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
  const screenH = Dimensions.get("screen").height;
  const screenW = Dimensions.get("screen").width;
  const orientation = useDeviceOrientation();
  console.log("orientation:", orientation)
  const handlePress = () => Alert.alert("my title", "My message", [
    { text:"Yeees", onPress: () => console.log("Yes")},
    { text:"No", onPress: () => console.log("No") }
  ]);
  const handleLongPress = () => console.log("Long click");
  
  let imgPath = "../assets/images/icon.png";
  let imgUrl = `https://picsum.photos/${screenW}/${screenH}`
  
  return (
    
      <View style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "column", // Sets main axis
        justifyContent: "center", // Justifies on main axis
        alignItems: "center", // Justifies in secondary axis
        alignContent: "center", // No efect if there is no wrapping
        //flexWrap: "wrap"
      }}>
        <Image style={{
          width: screenW,
          height: screenH,
          flex: 1
        }} source={{uri: imgUrl}} />

        <View style={{
            alignItems: "center",
            top: 50,
            position: "absolute"
          }} >
          <Image style={{
            width: 100,
            height: 100,
            //flex: 1,
            //alignItems: "center",
            //position: "absolute"
          }} source={require(imgPath)}>
          </Image>
          <Text style={{
            color: "red"
          }}>Sell what you don't need</Text>
        </View>

        <View style={{
          backgroundColor: "salmon",
          width: "100%",
          height: 75,
        }}></View>
        <View style={{
          backgroundColor: "#55989B",
          width: "100%",
          height: 75
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
