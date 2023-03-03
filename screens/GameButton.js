import { View, Pressable, Text } from 'react-native'

export default function GameButton({viewStyle, textStyle, buttonText, dispatch}) {
    return <View id={buttonText} style={viewStyle}> 
                <Pressable onPress={() => dispatch({type: buttonText, digit: buttonText})}>
                    <Text style={textStyle}> {buttonText} </Text>
                </Pressable>
            </View>
}