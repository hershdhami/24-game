import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useReducer } from 'react'
import { useNavigation } from '@react-navigation/native'
import Pressable from './Pressable'

export const ACTIONABLE_ITEMS = {
  ADD_DIGIT: "add-digit",
  SUBTRACT_DIGIT: "subtract-digit",
  MULTIPLY_DIGIT: "multiply-digit",
  DIVIDE_DIGIT: "divide-digit"
}

function reducer(state, {type, payload}) {
  if (type == "first-button") {
      //Perform the ADD_DIGIT BS
      return {
        ...state,
        selectedButton: payload
      };
  }
}

export function dimBrightness(payload) {
  var elem = document.getElementById({payload})
  elem.style.backgroundColor("#718FBB")
}

function buttonFunction() {
  console.log("Hello!")
}

const Homescreen = () => {
  const navigation = useNavigation();
  const [{currentOperand, previousOperand, operation, selectedButton}, dispatch] = useReducer(reducer, {})

  useLayoutEffect(() => {

    //This allows us to change the default header and etc.
    navigation.setOptions({
      title: '24 GAME',
      headerStyle: {
        backgroundColor: '#483d8b',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 25
      },
      headerTitleAlign: 'center'
    });

  }, []) //As soon as the screen appears "do something"

  let testButtonText = '' + Math.floor(Math.random() * 11);

  return (
    <SafeAreaView style={Styles.container}>

      {/* TO MAKE PRESSABLE DRAGGABLE
          https://www.kirupa.com/html5/drag.htm
      */}
      
      <View style={Styles.mainGameContainer}> 
        <Pressable activeOpacity={0.7} onPress={() => buttonFunction()} style={Styles.buttonContainer}>
          <Text style={Styles.buttonTextStyle}> {'' + Math.floor(Math.random() * 11)} </Text>
        </Pressable>
        <Pressable activeOpacity={0.7} onPress={() => buttonFunction()} style={Styles.buttonContainer}>
          <Text style={Styles.buttonTextStyle}> {'' + Math.floor(Math.random() * 11)} </Text>
        </Pressable>
        <Pressable activeOpacity={0.7} onPress={() => buttonFunction()} style={Styles.buttonContainer}>
          <Text style={Styles.buttonTextStyle}> {'' + Math.floor(Math.random() * 11)} </Text>
        </Pressable>
        <Pressable activeOpacity={0.7} onPress={() => buttonFunction()} style={Styles.buttonContainer}>
          <Text style={Styles.buttonTextStyle}> {'' + Math.floor(Math.random() * 11)} </Text>
        </Pressable>
      </View>

      <View style={Styles.operandButtonContainer}>
        <Pressable activeOpacity={0.7} onPress={() => buttonFunction()} style={Styles.operandButtons}>
          <Text style={Styles.buttonTextStyle}> + </Text>
        </Pressable>
        <Pressable activeOpacity={0.7} onPress={() => buttonFunction()} style={Styles.operandButtons}>
          <Text style={Styles.buttonTextStyle}> - </Text>
        </Pressable>
        <Pressable activeOpacity={0.7} onPress={() => buttonFunction()} style={Styles.operandButtons}>
          <Text style={Styles.buttonTextStyle}> / </Text>
        </Pressable>
        <Pressable activeOpacity={0.7} onPress={() => buttonFunction()} style={Styles.operandButtons}>
          <Text style={Styles.buttonTextStyle}> X </Text>
        </Pressable>
      </View>

    </SafeAreaView>
  )
}
export default Homescreen

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
  operandButtonContainer: {
    height: "10%",
    top: "20%",
    width: "60%",
    backgroundColor: "#d3d3d3",
    display: "flex",
    flexDirection: "row",
    borderColor: "white",
    borderRadius: 20,
    justifyContent: "space-around",
    alignContent: "space-around",
    flexWrap: "wrap",
  },
  operandButtons: {
    width: "20%",
    height: "50%",
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

  //Header CSS
  headerContainer: {
    height: 50,
    justifyContent: "space-evenly",
    backgroundColor: '#483d8b',
    minWidth: "100%",
    flexDirection: "column",
    display: "flex"
  },
  headerTextStyle: {
    fontSize: 25,
    color: "white"
  }
});

/*
    navigation.setOptions({
      headerShown: false,
    });

      <View style={Styles.operandButtonContainer}>
        <Button mode="outlined" onPress={() => buttonFunction()} style={Styles.operandButtons} labelStyle={{fontSize: 15}} textColor="white"> + </Button>
        <Button mode="outlined" onPress={() => buttonFunction()} style={Styles.operandButtons} labelStyle={{fontSize: 15}} textColor="white"> - </Button>
        <Button mode="outlined" onPress={() => buttonFunction()} style={Styles.operandButtons} labelStyle={{fontSize: 15}} textColor="white"> X </Button>
        <Button mode="outlined" onPress={() => buttonFunction()} style={Styles.operandButtons} labelStyle={{fontSize: 15}} textColor="white"> / </Button>
        <Button mode="outlined" onPress={() => buttonFunction()} style={Styles.operandButtons} labelStyle={{fontSize: 15}} textColor="white"> B </Button>
        <Button mode="outlined" onPress={() => buttonFunction()} style={Styles.operandButtons} labelStyle={{fontSize: 15}} textColor="white"> F </Button>
      </View>
*/

/*
    class="grid grid-cols-2 top-1/4 right-1/4 left-1/4 w-1/2 h-1/5 bg-green-400 justify-evenly"

    container: {
      flex: 1,
      alignContent: "space-around",
      justifyContent: "space-evenly",
      flexDirection: "row",
      flexWrap: "wrap",
      backgroundColor: "#EDEBE7"
    },

    <View style={Styles.first}>
    </View>

    <GameButton dispatch={dispatch} viewStyle={Styles.second} textStyle={Styles.textCss} buttonText={'' + Math.floor(Math.random() * 11)} />
    <GameButton dispatch={dispatch} viewStyle={Styles.second} textStyle={Styles.textCss} buttonText={'' + Math.floor(Math.random() * 11)} />
    <GameButton dispatch={dispatch} viewStyle={Styles.second} textStyle={Styles.textCss} buttonText={'' + Math.floor(Math.random() * 11)} />
    <GameButton dispatch={dispatch} viewStyle={Styles.second} textStyle={Styles.textCss} buttonText={'' + Math.floor(Math.random() * 11)} />

    <OperandButton id={ACTIONABLE_ITEMS.ADD_DIGIT} viewStyle={Styles.second_bossmode} textStyle={Styles.textCss} buttonText="+" />
    <OperandButton id={ACTIONABLE_ITEMS.SUBTRACT_DIGIT} viewStyle={Styles.second_bossmode} textStyle={Styles.textCss} buttonText="-" />
    <OperandButton id={ACTIONABLE_ITEMS.MULTIPLY_DIGIT} viewStyle={Styles.second_bossmode} textStyle={Styles.textCss} buttonText="X" />
    <OperandButton id={ACTIONABLE_ITEMS.DIVIDE_DIGIT} viewStyle={Styles.second_bossmode} textStyle={Styles.textCss} buttonText="/" />

    <View style={Styles.third}> 
    </View>
    <View style={Styles.fourth}> 
    </View>
*/