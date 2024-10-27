import { Dimensions, StyleSheet, ImageBackground, View, Image, Text } from "react-native";

function WelcomeScreen() {
    
    console.log("Reload:", Dimensions.get("screen"))
    const screenH = Dimensions.get("screen").height;
    const screenW = Dimensions.get("screen").width;
    const imgUrl = `https://picsum.photos/${screenW}/${screenH}`
    return (
        <ImageBackground
            source={{uri: imgUrl}}
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image
                    source={require("../../assets/images/icon.png")}
                    style={styles.logo}></Image>
                <Text>Sell what you don't need</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        //flexDirection: "column-reverse",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65"
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#4ecdc4"
    }
})

export default WelcomeScreen;