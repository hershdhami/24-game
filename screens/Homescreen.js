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

let second = '' + Math.floor(Math.random() * 11);
let third = '' + Math.floor(Math.random() * 11);
let fourth = '' + Math.floor(Math.random() * 11);
let numbers = ["0","0"];
let i = 0;

var operand;

var final;

var thing;
var thing1;

var currentNumbers = new Set();
var historicalQueue = [];
var currentQueue = [];

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
      firstButtonOpacity: 1,
      secondButtonOpacity: 1,
      thirdButtonOpacity: 1,
      fourthButtonOpacity: 1,
      firstButtonText: ('' + Math.floor(Math.random() * 11)),
      secondButtonText: ('' + Math.floor(Math.random() * 11)),
      thirdButtonText: ('' + Math.floor(Math.random() * 11)),
      fourthButtonText: ('' + Math.floor(Math.random() * 11)),
    };
  }

  isOperator(input) {
    if (input == '%' || input == '/' || input == '*' || input == '+' || input == '-'){
        return true;
    } else{
        return false;
    }
  }

  digitEquivalent(name, curr, id) {
    numbers[i] = name;
    if(i == 0){thing = curr;}
    
    let lastQueueElement = currentQueue.length - 1;
    let buttonValue = id + " " + name;
    var newNumber = 0;
    var shouldChange = false;
    var updateButtonText;

    currentNumbers.add(buttonValue);

    if (lastQueueElement < 0) {
      currentQueue.push(buttonValue)
    } else if (!currentQueue.includes(buttonValue) && lastQueueElement >= 0) {
      if (this.isOperator(currentQueue[lastQueueElement])) {
        currentQueue.push(buttonValue)
      }
    }

    if (!historicalQueue.includes(buttonValue)) {
      historicalQueue.push(buttonValue)
    }

    if (currentQueue.length == 3) {
      let doubleStringOne = currentQueue[0].split(" ");
      let doubleStringTwo = currentQueue[2].split(" ");
      newNumber = parseInt(doubleStringOne[1]) + parseInt(doubleStringTwo[1]);
      console.log("This is the newNumber: " + newNumber);
      id = doubleStringOne[0];
      shouldChange = true

      updateButtonText = doubleStringTwo[0];

      this.state.thirdButtonText

      currentQueue = [];
    }

    if (shouldChange) {
      switch(id){
        case "first":
          this.setState({
            ...this.state,
            firstButtonOpacity: 0,
            thirdButtonText: '' + newNumber,
          })
          break;
        case "second":
          this.setState({
            ...this.state,
            secondButtonOpacity: 0,
          })
          break;
        case "third":
          this.setState({
            ...this.state,
            thirdButtonOpacity: 0,
          })
          break;
        case "fourth":
          this.setState({
            ...this.state,
            fourthButtonOpacity: 0,
          })
          break;
      }
    }
    
    console.log(currentNumbers);
    console.log(currentNumbers.size);
    console.log(currentQueue);
    console.log(currentQueue.length);
  }

  operandf(name){
    let lastQueueElement = currentQueue.length - 1;

    if(i == 0){
      operand = name;
      i = 1;
      //document.getElementById(thing.id).disabled = true;
    }
    
    if (!currentQueue.includes(name) && lastQueueElement >= 0) {
      if (!this.isOperator(currentQueue[lastQueueElement])) {
        currentQueue.push(name)
      }
    }
  }

  resetOpacity() {
    this.setState({
      ...this.state,
      firstButtonOpacity: 1,
      secondButtonOpacity: 1,
      thirdButtonOpacity: 1,
      fourthButtonOpacity: 1
    })
  }
  
  componentDidMount() {
    //Same as useLayoutEffect
  }
  componentDidUpdate() {
    //Same as useLayoutEffect
  }
  

  //Added the ability to remove a button's opacity
  render() {
    return (
      <SafeAreaView style={Styles.container}>
  
         {/* TO MAKE PRESSABLE DRAGGABLE
            https://www.kirupa.com/html5/drag.htm
        */}
  
        <View style={Styles.mainGameContainer}> 
          
          <GameButton whenClicked={() => this.digitEquivalent(this.state.firstButtonText, this, "first")} viewStyle={{...Styles.buttonContainer,
                                                                              opacity: this.state.firstButtonOpacity}} textStyle={Styles.buttonTextStyle} buttonText={this.state.firstButtonText} id="first"> </GameButton>
          <GameButton whenClicked={() => this.digitEquivalent(this.state.secondButtonText, this, "second")} viewStyle={{...Styles.buttonContainer,
                                                                              opacity: this.state.secondButtonOpacity}} textStyle={Styles.buttonTextStyle} buttonText={this.state.secondButtonText} id="second"> </GameButton>
          <GameButton whenClicked={() => this.digitEquivalent(this.state.thirdButtonText, this, "third")} viewStyle={{...Styles.buttonContainer,
                                                                              opacity: this.state.thirdButtonOpacity}} textStyle={Styles.buttonTextStyle} buttonText={this.state.thirdButtonText} id="third"> </GameButton>
          <GameButton whenClicked={() => this.digitEquivalent(this.state.fourthButtonText, this, "fourth")} viewStyle={{...Styles.buttonContainer,
                                                                              opacity: this.state.fourthButtonOpacity}} textStyle={Styles.buttonTextStyle} buttonText={this.state.fourthButtonText} id="fourth"> </GameButton>
        </View>
  
        <View style={Styles.operandButtonContainer}>
          <OperandButton whenClicked={() => this.operandf("+")} viewStyle={Styles.operandButtons} id={ACTIONABLE_ITEMS.ADD_DIGIT} textStyle={Styles.buttonTextStyle} buttonText={"+"} />
          <OperandButton whenClicked={() => this.operandf("-")} viewStyle={Styles.operandButtons} id={ACTIONABLE_ITEMS.SUBTRACT_DIGIT} textStyle={Styles.buttonTextStyle} buttonText={"-"} />
          <OperandButton whenClicked={() => this.operandf("/")} viewStyle={Styles.operandButtons} id={ACTIONABLE_ITEMS.DIVIDE_DIGIT} textStyle={Styles.buttonTextStyle} buttonText={"/"} />
          <OperandButton whenClicked={() => this.operandf("*")} viewStyle={Styles.operandButtons} id={ACTIONABLE_ITEMS.MULTIPLY_DIGIT} textStyle={Styles.buttonTextStyle} buttonText={"X"} />
          <EqualsButton viewStyle={Styles.operandButtons} id="equals" textStyle={Styles.buttonTextStyle} buttonText="=" />
          <OperandButton whenClicked={() => this.resetOpacity()} viewStyle={Styles.operandButtons} id={ACTIONABLE_ITEMS.MULTIPLY_DIGIT} textStyle={Styles.buttonTextStyle} buttonText={"Back"} />
          <OperandButton whenClicked={() => this.resetOpacity()} viewStyle={Styles.operandButtons} id={ACTIONABLE_ITEMS.MULTIPLY_DIGIT} textStyle={Styles.buttonTextStyle} buttonText={"For"} />
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