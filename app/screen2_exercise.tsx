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
        backgroundColor: "black",
        flex: 1,
        flexDirection: "column", // Sets main axis
        justifyContent: "center", // Justifies on main axis
        alignItems: "center", // Justifies in secondary axis
        alignContent: "center", // No efect if there is no wrapping
        //flexWrap: "wrap"
      }}>
        <Image style={{
          width: screenW*0.95,
          height: screenH*0.7,
          //flex: 1
        }} source={{uri: imgUrl}} />

        <View style={{
        backgroundColor: "#55989B",
            top: 10,
            right: 25,
            width: 50,
            height: 50,
            position: "absolute"
          }} >
        </View>
        
        <View style={{
            backgroundColor: "salmon",
        top: 10,
            left: 25,
            width: 50,
            height: 50,
            position: "absolute"
          }} >
        </View>


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
