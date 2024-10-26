import { Text, View, SafeAreaView, Image } from "react-native";
import { StyleSheet } from 'react-native';

export default function Index() {
  const handlePress = () => console.log("Text click");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Holaa
      </Text>
      <Image source={require('../assets/images/icon.png')} />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#fff"
  }
});
