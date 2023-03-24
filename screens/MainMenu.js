import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const MainMenu = ({ navigation }) => {
    return(
    <SafeAreaView style={Styles.container}>
        <View style={Styles.mainGameContainer}>
            <Pressable style={Styles.buttonContainer} onPress={() => navigation.navigate("24 GAME")}>
                <Button labelStyle={{color: "white", fontSize: 90, textAlign:"center"}} icon="play"></Button>
            </Pressable>
            <View style={Styles.accessoryButtonContainer}>
                <Pressable style={Styles.smallButtonContainer}>
                    <Button labelStyle={{color: "white", fontSize: 30, textAlign:"center"}} icon="table-large"></Button>
                </Pressable>
                <Pressable style={Styles.smallButtonContainer}>
                    <Button labelStyle={{color: "white", fontSize: 30, textAlign:"center"}} icon="account"></Button>
                </Pressable>
                <Pressable style={Styles.smallButtonContainer}>
                    <Button labelStyle={{color: "white", fontSize: 30, textAlign:"center"}} icon="headphones-settings"></Button>
                </Pressable>
            </View>
        </View>
    </SafeAreaView>
    )
}

export default MainMenu

const Styles = StyleSheet.create({
    container: {
      backgroundColor: "#d3d3d3",
      height: "100%",
      alignItems: "center",
    },
    mainGameContainer: {
      height: "25%",
      top: "40%",
      width: "75%",
      backgroundColor: "#d3d3d3",
      display: "flex",
      flexDirection: "column",
      borderColor: "white"
    },
    buttonContainer: {
        width: "40%",
        height: "45%",
        backgroundColor: "#483d8b",
        tintColor: "black",
        borderRadius: 20,
        borderWidth: 4,
        borderColor: "black",
        alignSelf: "center"
    },
    accessoryButtonContainer: {
        height: "100%",
        top: "60%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        borderColor: "white",
        justifyContent: "space-between",
        flexWrap: "wrap"
    },
    smallButtonContainer: {
        width: "22%",
        height: "30%",
        backgroundColor: "#483d8b",
        tintColor: "black",
        borderRadius: 20,
        borderWidth: 4,
        borderColor: "black",
        alignItems: "center"
    },
    buttonTextStyle: {
        fontSize: 25,
        color:"white",
        alignContent: "center",
        justifyContent: "center",
        textAlign: "center"
    },
});
