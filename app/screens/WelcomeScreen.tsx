import { Dimensions, StyleSheet, ImageBackground, View, Image, Text, TouchableHighlight } from "react-native";

import colors from "../config/colors"

function WelcomeScreen() {
    
    const goToDetail = () => {
        console.log("goToDetail");
        //props.navigation.navigate('ScreenTwo');

    }

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
            <TouchableHighlight onPress={goToDetail} style={styles.loginButton}>
                <View>
                    <Text>Hola</Text>
                </View>
            </TouchableHighlight>
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
        backgroundColor: colors.primary,
        alignItems: "center",
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
        backgroundColor: colors.secondary
    }
})

export default WelcomeScreen;