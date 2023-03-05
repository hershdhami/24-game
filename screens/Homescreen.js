import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useReducer } from 'react'
import { useNavigation } from '@react-navigation/native'
import Pressable from './Pressable'
import GameButton from './GameButton'
import OperandButton from './OperandButton'
import EqualsButton from './EqualsButton'

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

let first = '' + Math.floor(Math.random() * 11);
let second = '' + Math.floor(Math.random() * 11);
let third = '' + Math.floor(Math.random() * 11);
let fourth = '' + Math.floor(Math.random() * 11);
let numbers = ["0","0"];
let i = 0;

var operand;

var final;

var thing;
var thing1;

export function operandf(name){
  if(i == 0){
    operand = name;
    i = 1;
    //document.getElementById(thing.id).disabled = true;
  }
}

export function digitf(name, curr){
  //if(curr !=  thing){
    numbers[i] = name;
    if(i == 0){thing = curr;}
  //}
}

export function equals(){
  switch(operand){
    case "+":
      final = Number(numbers[0]) + Number(numbers[1]);
      break;
    case "-":
      final = numbers[0] - numbers[1];
      break;
    case "X":
      final = numbers[0] * numbers[1];
      break;
    case "/":
      final = numbers[0] / numbers[1];
      break;
  }
  i=0;
  console.log(numbers[0], numbers[1], final);
  numbers = ["0","0"]
}

class Homescreen extends React.Component {
  constructor(props) {
    super(props);
    //Why does changing the state ruin everyhing
    this.state = {
      counter: 0
    };
  }
  
  componentDidMount() {
    //Same as useLayoutEffect
  }
  componentDidUpdate() {
    //Same as useLayoutEffect
  }
  

  render() {
    return (
      <SafeAreaView style={Styles.container}>
  
         {/* TO MAKE PRESSABLE DRAGGABLE
            https://www.kirupa.com/html5/drag.htm
        */}
  
        <View style={Styles.mainGameContainer}> 
          <Pressable id={"first"} activeOpacity={0.7} onPress={() => digitf(first, this)} style={Styles.buttonContainer}>
            <Text style={Styles.buttonTextStyle}> {first} </Text>
          </Pressable>
          <GameButton viewStyle={Styles.buttonContainer} textStyle={Styles.buttonTextStyle} buttonText={second} id="second"> </GameButton>
          <GameButton viewStyle={Styles.buttonContainer} textStyle={Styles.buttonTextStyle} buttonText={third} id="third"> </GameButton>
          <GameButton viewStyle={Styles.buttonContainer} textStyle={Styles.buttonTextStyle} buttonText={fourth} id="fourth"> </GameButton>
        </View>
  
        <View style={Styles.operandButtonContainer}>
          <OperandButton viewStyle={Styles.operandButtons} id={ACTIONABLE_ITEMS.ADD_DIGIT} textStyle={Styles.buttonTextStyle} buttonText={"+"} />
          <OperandButton viewStyle={Styles.operandButtons} id={ACTIONABLE_ITEMS.SUBTRACT_DIGIT} textStyle={Styles.buttonTextStyle} buttonText={"-"} />
          <OperandButton viewStyle={Styles.operandButtons} id={ACTIONABLE_ITEMS.DIVIDE_DIGIT} textStyle={Styles.buttonTextStyle} buttonText={"/"} />
          <OperandButton viewStyle={Styles.operandButtons} id={ACTIONABLE_ITEMS.MULTIPLY_DIGIT} textStyle={Styles.buttonTextStyle} buttonText={"X"} />
          <EqualsButton viewStyle={Styles.operandButtons} id="equals" textStyle={Styles.buttonTextStyle} buttonText="=" />
        </View>
  
        {/* </Text> */}
      </SafeAreaView>
    );
  }
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
<View className='pl-1 pt-4 pb-8 items-center mx-4 space-x-1.5'>
          <Text className='text-center font-bold'>
            24-Game
          </Text>
        </View>

        <View style={Styles.second}> 
        <Pressable>
          <Text style={Styles.textCss}> 4 </Text>
        </Pressable>
      </View>
*/

/*
<Image 
            source={{
              url: 'https://links.papareact.com/wru'
            }}

            //h-7: Height of 7
            //w-7: WIdth of 7
            className='h-8 w-8 bg-gray-200 p-4 rounded=full'
          />

          {/*This means that this view will take up most of the room*//*}
/*
          <View className='flex-1'>
              <Text className='font-bold text-gray-400 text-xs pt-1'>Deliver Now!</Text>
              <Text className='font-bold text-xl'>Current Location
              <ChevronDownIcon size={20} colors="#00CCBB" />
              </Text>
          </View>
          
          <UserIcon size={35} color="#00CCBB" />

          <DigitButton digit={Math.floor(Math.random() * 11)} />
            <DigitButton digit={Math.floor(Math.random() * 11)} />
            <DigitButton digit={Math.floor(Math.random() * 11)} />
            <DigitButton digit={Math.floor(Math.random() * 11)} />
            <OperandButton operation={"+"} />
            <OperandButton operation={"-"} />
            <OperandButton operation={"x"} />
            <OperandButton operation={"/"} />
*/

/*

<FlatList className='text-xl'
            data={dataSource}
            renderItem={({item}) => (
              <DigitButton className='text-xl' digit={item.src} />
            )}
            numColumns={4}
            keyExtractor={(item, index) => index}
          />

*/