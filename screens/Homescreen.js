import { View, Text, SafeAreaView, Button, Pressable, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useReducer } from 'react'
import { useNavigation } from '@react-navigation/native'
import GameButton from './GameButton'
import OperandButton from './OperandButton'

export const ACTIONABLE_ITEMS = {
  ADD_DIGIT: "add-digit",
  SUBTRACT_DIGIT: "subtract-digit",
  MULTIPLY_DIGIT: "multiply-digit",
  DIVIDE_DIGIT: "divide-digit"
}

function reducer(state, {type, payload}) {
  if (type == ACTIONABLE_ITEMS.ADD_DIGIT) {
      //Perform the ADD_DIGIT BS
      var elem = document.getElementById({payload})
      elem.style.backgroundColor("#718FBB")

      return {
        ...state,
        selectedButton: payload
      };
  }
}

const Homescreen = () => {
  const navigation = useNavigation();

  //One way to say Hello is equal to a function
  hello = function() {
    console.log("Hello world");
  }

  //Same thing written in another way
  //Don't really care about what the 'function name' is
  hello = () => {
    console.log("Hello world");
  }

  //First parameter is the setup function
    //This will run before component is added to DOM, react will run setup function
  //Second parameter is the dependcies used in the setup 
    //Whenever smth inside this array change it will load again too!

  useLayoutEffect(() => {

    //This allows us to change the default header and etc.
    navigation.setOptions({
      headerShown: false,
    });

  }, []) //As soon as the screen appears "do something"

  const [{currentOperand, previousOperand, operation, selectedButton}, dispatch] = useReducer(reducer, {})

  return (
    <SafeAreaView style={Styles.container}>
      {/* <Text className='text-red-500'> */}
        {/* Header */}
      <View style={Styles.safeAreaHeader}>

      </View>
      <View style={Styles.first}> 
        <Text style={Styles.textCss}> 24-Game </Text>
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
       
        

      {/* </Text> */}
    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "space-around",
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#EDEBE7"
  },
  safeAreaHeader: {
    height: "4.5%",
    width: "95%",
    backgroundColor: "#EDEBE7",
  },
  first: {
    height: "9%",
    width: "95%",
    backgroundColor: "#718FBB",
    justifyContent: "space-evenly",
    borderRadius: 25,
  },
  second: {
    height: "14%",
    width: "22.5%",
    backgroundColor: "#718FBB",
    borderRadius: 25,
    justifyContent: "space-evenly",
  },
  second_bossmode: {
    height: "8%",
    width: "22.5%",
    backgroundColor: "#718FBB",
    borderRadius: 25,
    justifyContent: "space-evenly",
  },
  third: {
    height: "52%",
    width: "75%",
    backgroundColor: "#718FBB",
    borderRadius: 25,
  },
  fourth: {
    height: "52%",
    width: "20%",
    backgroundColor: "#EDEBE7",
  },
  textCss: {
    fontSize: 25,
    color: "white",
    textAlign: "center"
  }
});
export default Homescreen


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