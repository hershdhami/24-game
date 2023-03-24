import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useReducer } from 'react'
import { useNavigation } from '@react-navigation/native'
import Pressable from './Pressable'
import GameButton from './GameButton'
import OperandButton from './OperandButton'
import EqualsButton from './EqualsButton'
import IconButton from './IconButton'
import WinningScreen from './WinningScreen'

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

let numbers = ["0","0"];
let i = 0;

var operand;
var currentNumbers = new Set();
var historicalQueue = [];
var historicalStates = [];
var currentQueue = [];

var counter = 0;

class Homescreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstButtonOpacity: 1,
      secondButtonOpacity: 1,
      thirdButtonOpacity: 1,
      fourthButtonOpacity: 1,
      firstButtonText: ('' + (Math.floor(Math.random() * 10) + 1)),
      secondButtonText: ('' + (Math.floor(Math.random() * 10) + 1)),
      thirdButtonText: ('' + (Math.floor(Math.random() * 10) + 1)),
      fourthButtonText: ('' + (Math.floor(Math.random() * 10) + 1)),
      didWin: false,
    };
    window.State = Object.assign({}, this.state);
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
    
    let lastQueueElement = currentQueue.length - 1;
    var buttonValue = id + " " + name;
    var newNumber = 0;
    var shouldChange = false;
    var didUserWin = false;
    var updateButtonText;

    currentNumbers.add(buttonValue);

    if (lastQueueElement < 0) {
      currentQueue.push(buttonValue)
    } else if (!currentQueue.includes(buttonValue) || !this.isOperator(currentQueue[lastQueueElement])) {
      if (this.isOperator(currentQueue[lastQueueElement])) {
        currentQueue.push(buttonValue)
      } else {
        currentQueue[lastQueueElement] = buttonValue
      }
    }
    
    let old = currentQueue[0];

    if (currentQueue.length == 3) {
      var doubleStringOne = currentQueue[0].split(" ");
      var doubleStringTwo = currentQueue[2].split(" ");

      var num1 = Number(doubleStringOne[1]);
      var num2 = Number(doubleStringTwo[1]);

      switch(currentQueue[1]){
        case "+":
          newNumber = num1 + num2;
          break;
        case "-":
          newNumber = num1 - num2;
          break;
        case "*":
          newNumber = num1 * num2;
          break;
        case "/":
          newNumber = num1 / num2;
          break;
      }
      console.log("This is the newNumber: " + newNumber);
      id = doubleStringOne[0];
      shouldChange = true

      if (newNumber == 24) {
        didUserWin = true;
      }

      updateButtonText = doubleStringTwo[0] + "ButtonText";
      buttonValue = doubleStringTwo[0] + " " + newNumber.toString()
      currentQueue = [buttonValue];
    }

    if (newNumber < 0) {return};

    if (shouldChange) {
      if (!historicalQueue.includes(this.state)) {
        historicalStates.push(this.state);
      }

      switch(id) {
        case "first":
          this.setState({
            ...this.state,
            [updateButtonText]: '' + newNumber,
            firstButtonOpacity: 0,
            didWin: didUserWin,
          })
          break;
        case "second":
          this.setState({
            ...this.state,
            [updateButtonText]: '' + newNumber,
            secondButtonOpacity: 0,
            didWin: didUserWin,
          })
          break;
        case "third":
          this.setState({
            ...this.state,
            [updateButtonText]: '' + newNumber,
            thirdButtonOpacity: 0,
            didWin: didUserWin,
          })
          break;
        case "fourth":
          this.setState({
            ...this.state,
            [updateButtonText]: '' + newNumber,
            fourthButtonOpacity: 0,
            didWin: didUserWin,
          })
          break;
      }
      counter++;
      if(counter == 3){
        console.log("we are done :) time to check");
      }
     }
    // else{
    //   let prev = old.split(" ");

    //   switch(prev[0]){
    //     case "first":
    //       this.setState({
    //         ...this.state,
    //         firstButtonOpacity: 0.7,
    //       })
    //       break;
    //     case "second":
    //       this.setState({
    //         ...this.state,
    //         secondButtonOpacity: 0.7,
    //       })
    //       break;
    //     case "third":
    //       this.setState({
    //         ...this.state,
    //         thirdButtonOpacity: 0.7,
    //       })
    //       break;
    //     case "fourth":
    //       this.setState({
    //         ...this.state,
    //         fourthButtonOpacity: 0.7,
    //       })
    //       break; 
    //   }

    //   switch(id){
    //     case "first":
    //       this.setState({
    //         ...this.state,
    //         firstButtonOpacity: 0.3,
    //       })
    //       break;
    //     case "second":
    //       this.setState({
    //         ...this.state,
    //         secondButtonOpacity: 0.3,
    //       })
    //       break;
    //     case "third":
    //       this.setState({
    //         ...this.state,
    //         thirdButtonOpacity: 0.3,
    //       })
    //       break;
    //     case "fourth":
    //       this.setState({
    //         ...this.state,
    //         fourthButtonOpacity: 0.3,
    //       })
    //       break;
    //   }
    // }
    
    console.log(currentNumbers);
    console.log(currentNumbers.size);
    console.log(currentQueue);
    console.log(currentQueue.length);

    console.log("------------STATE ARRAY---------------");
    console.log(historicalStates);
  }

  judgePoint24(numsList) {
    var shouldChange = false;
    var nums = numsList;

    while (!shouldChange) {
      for (let a = 0; a < 4; a++) {
        for(let b = 0; b < 4; b++) {
          if (a != b) {
            for(let c = 0; c < 4; c++) {
              if (a != c && b!= c) {
                for(let d = 0; d < 4; d++) {
                  if (a != d && b != d && c != d) {
                    if(this.v1(Number(nums[a]),Number(nums[b]),Number(nums[c]),Number(nums[d]))) {
                      return;
                    }
                  }
                }
              }
            }
          }
        }
      }
  
      this.setState({
        ...this.state,
        firstButtonText: ('' + (Math.floor(Math.random() * 10) + 1)),
        secondButtonText: ('' + (Math.floor(Math.random() * 10) + 1)),
        thirdButtonText: ('' + (Math.floor(Math.random() * 10) + 1)),
        fourthButtonText: ('' + (Math.floor(Math.random() * 10) + 1)),
        didWin: false,
        firstButtonOpacity: 1,
        secondButtonOpacity: 1,
        thirdButtonOpacity: 1,
        fourthButtonOpacity: 1,
      })

      nums = [Number(firstButtonText),Number(secondButtonText),Number(thirdButtonText),Number(fourthButtonText)]
    }
  }

  v1(a, b, c ,d) {
    if (this.v2(a+b,c,d) || this.v2(a-b,c,d) || this.v2(a*b,c,d) || this.v2(a/b,c,d)) return true;
    if (this.v2(a,b+c,d) || this.v2(a,b-c,d) || this.v2(a,b*c,d) || this.v2(a,b/c,d)) return true;
    if (this.v2(a,b,c+d) || this.v2(a,b,c-d) || this.v2(a,b,c*d) || this.v2(a,b,c/d)) return true;
  }

  v2(x,b,c) {
    if (this.v3(x+b,c) || this.v3(x-b,c) || this.v3(x*b,c) || this.v3(x/b,c)) return true;
    if (this.v3(x,b+c) || this.v3(x,b-c) || this.v3(x,b*c) || this.v3(x,b/c)) return true;
  }

  v3(x,y) {
    if (this.ansFinder(x+y) || this.ansFinder(x-y) || this.ansFinder(x*y) || this.ansFinder(x/y)) return true;
  }

  ansFinder(x) {
    if (Math.abs(x) < 0.01) {
      return true;
    }
    return false;
  }

  operandf(name){
    let lastQueueElement = currentQueue.length - 1;

    if(i == 0){
      operand = name;
      i = 1;
    }
    
    if (!currentQueue.includes(name) && lastQueueElement >= 0) {
      if (!this.isOperator(currentQueue[lastQueueElement])) {
        currentQueue.push(name)
      }
    }
  }

  goBack() {

    //Code to Reload Old States
    let lastQueueElement = historicalStates.length - 1;

    this.setState(
      historicalStates[lastQueueElement]
    )

    historicalStates.pop();
  }
  
  componentDidMount() {
    //Same as useLayoutEffectr
    let numberStates = [this.state.firstButtonText, this.state.secondButtonText, this.state.thirdButtonText, this.state.fourthButtonText]
    this.judgePoint24(numberStates)
  }

  componentDidUpdate() {
    //Same as useLayoutEffect

  }
  
  onModalClose() {
    this.setState({
      ...this.state,
      firstButtonText: ('' + (Math.floor(Math.random() * 10) + 1)),
      secondButtonText: ('' + (Math.floor(Math.random() * 10) + 1)),
      thirdButtonText: ('' + (Math.floor(Math.random() * 10) + 1)),
      fourthButtonText: ('' + (Math.floor(Math.random() * 10) + 1)),
      didWin: false,
      firstButtonOpacity: 1,
      secondButtonOpacity: 1,
      thirdButtonOpacity: 1,
      fourthButtonOpacity: 1,
    })

    this.componentDidMount();

    console.log("Entered");
  }
  

  //Added the ability to remove a button's opacity
  render() {
    return (
      <SafeAreaView style={Styles.container}>
  
         {/* TO MAKE PRESSABLE DRAGGABLE
            https://www.kirupa.com/html5/drag.htm
        */}
        {this.state.didWin ? (
          <SafeAreaView style={Styles.container}>
            <WinningScreen isVisible={this.state.didWin} onClose={() => this.onModalClose()}></WinningScreen>
          </SafeAreaView>
        ) : (
          <View style={Styles.container}>
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
              <IconButton whenClicked={() => this.goBack()} viewStyle={Styles.operandButtons} id={ACTIONABLE_ITEMS.MULTIPLY_DIGIT} icon={"arrow-left-thick"} />
            </View>
          </View>
        )}
        
  
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
    width: "100%",
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
    tintColor: "black",
    borderWidth: 2,
    borderColor: "black",
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
    justifyContent: "center",
    alignContent: "space-around",
    flexWrap: "wrap",
    padding: 5,
  },
  operandButtons: {
    width: "22%",
    height: "50%",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#483d8b",
    tintColor: "black",
    borderWidth: 2,
    borderColor: "black",
    margin: 5,
  },
  buttonTextStyle: {
    fontSize: 25,
    color:"white",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center"
  },

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