import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import Pressable from "./Pressable";
import React from "react";
import getNavigation from "./EqualsButton";

class MainMenu extends React.Component {
    constructor(props) {
      super(props);
    }

    toHomeScreen() {
        console.log("Im Alive")
    }

    render() {
        return(
            <SafeAreaView style={Styles.container}>
                <View style={Styles.mainGameContainer}>
                    <Pressable style={Styles.buttonContainer} onPress={this.toHomeScreen()}>
                        <Text style={Styles.buttonTextStyle}> CLICK ME </Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        )
    }
}

export default MainMenu

const Styles = StyleSheet.create({
    container: {
      backgroundColor: "#d3d3d3",
      height: "100%",
      alignItems: "center"
    },
    mainGameContainer: {
      height: "25%",
      top: "20%",
      width: "60%",
      backgroundColor: "#d3d3d3",
      display: "flex",
      flexDirection: "row",
      borderColor: "white",
      justifyContent: "space-around",
      alignContent: "space-around",
      flexWrap: "wrap",
    },
    buttonContainer: {
        width: "45%",
        height: "45%",
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "#483d8b",
        tintColor: "black"
    },
    buttonTextStyle: {
        fontSize: 25,
        color:"white",
        alignContent: "center",
        justifyContent: "center",
        textAlign: "center"
    },
});
