import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, PlayIcon } from 'react-native-heroicons/outline'
import './additionalcss.css';

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

  

  return (
    <SafeAreaView className='bg-white pt-5'>
      {/* <Text className='text-red-500'> */}
        {/* Header */}

        <View className='pl-1 pt-4 pb-3 items-center mx-4 space-x-1.5'>
          <Text className='text-center font-bold'>
            24-Game
          </Text>
        </View>

        <View className='bg-black pt-4 pb-4 grid grid-cols-2 gap-2 grid-rows-2'>
          <Text>
            <View>
              <Text className='text-white text-center'> Section #1 </Text>
            </View>
            <View>
              <Text className='text-white text-center'> Section #2 </Text>
            </View>
            <View>
              <Text className='text-white text-center'> Section #3 </Text>
            </View>
            <View>
              <Text className='text-white text-center'> Section #4 </Text>
            </View>
          </Text>
        </View>

      {/* </Text> */}
    </SafeAreaView>
  )
}

export default Homescreen


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
*/