import { Dimensions, StyleSheet, ImageBackground, View, Image, Text } from "react-native";


function ViewImageScreen() {
    const screenH = Dimensions.get("screen").height;
    const screenW = Dimensions.get("screen").width;
    const imgUrl = `https://picsum.photos/${400}/${600}`
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image 
                resizeMode="contain"
                style={styles.img}
                source={{uri: imgUrl}}/>
        </View>
    );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: "#fc5c65",
        position: "absolute",
        top: 40,
        left: 30
    },
    container: {
        backgroundColor: "black",
        flex: 1
    },
    deleteIcon:{
        width: 50,
        height: 50,
        backgroundColor: "#4ecdc4",
        position: "absolute",
        top: 40,
        right: 30
    },
    img: {
        width: "100%",
        height: "100%"
    }
})