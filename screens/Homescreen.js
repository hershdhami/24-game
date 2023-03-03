import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect, useReducer } from 'react'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import GameButton from './GameButton'
import OperandButton from './OperandButton'
import styles from '../style/style'

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

function dimBrightness(payload) {
  var elem = document.getElementById({payload})
  elem.style.backgroundColor("#718FBB")
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

  let testButtonText = '' + Math.floor(Math.random() * 11);

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text className='text-red-500'> */}
        {/* Header */}
      <View style={styles.safeAreaHeader}>
      </View>
      
      <View style={styles.first}> 
        <Text style={styles.textCss}> 24-Game </Text>
      </View>
      
      <View id={"first-button"} style={styles.second}> 
                <Button style={styles.textCss} onPress={() => dimBrightness("first-button")}>
                    {testButtonText}
                </Button>
            </View>

      <GameButton dispatch={dispatch} viewStyle={styles.second} textStyle={styles.textCss} buttonText={'' + Math.floor(Math.random() * 11)} />
      <GameButton dispatch={dispatch} viewStyle={styles.second} textStyle={styles.textCss} buttonText={'' + Math.floor(Math.random() * 11)} />
      <GameButton dispatch={dispatch} viewStyle={styles.second} textStyle={styles.textCss} buttonText={'' + Math.floor(Math.random() * 11)} />
      <OperandButton id={ACTIONABLE_ITEMS.ADD_DIGIT} viewStyle={styles.second_bossmode} textStyle={styles.textCss} buttonText="+" />
      <OperandButton id={ACTIONABLE_ITEMS.SUBTRACT_DIGIT} viewStyle={styles.second_bossmode} textStyle={styles.textCss} buttonText="-" />
      <OperandButton id={ACTIONABLE_ITEMS.MULTIPLY_DIGIT} viewStyle={styles.second_bossmode} textStyle={styles.textCss} buttonText="X" />
      <OperandButton id={ACTIONABLE_ITEMS.DIVIDE_DIGIT} viewStyle={styles.second_bossmode} textStyle={styles.textCss} buttonText="/" />
      <View style={styles.third}> 
      </View>
      <View style={styles.fourth}> 
      </View>
       
        

      {/* </Text> */}
    </SafeAreaView>
  )
}
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