import { View, Pressable, Text } from 'react-native'

export default function GameButton({viewStyle, textStyle, buttonText, new_dis}) {
    return <View id={buttonText} style={viewStyle}> 
                <Pressable onPress={() => new_dis({type: buttonText, digit: buttonText})}>
                    <Text style={textStyle}> {buttonText} </Text>
                </Pressable>
            </View>
}