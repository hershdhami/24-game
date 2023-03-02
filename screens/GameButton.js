import { View, Pressable, Text } from 'react-native'

export default function GameButton({viewStyle, textStyle, buttonText, dispatch}) {
    return <View id={digit} style={viewStyle}> 
                <Pressable onPress={() => dispatch({dispatch, buttonText})}>
                    <Text style={textStyle}> {buttonText} </Text>
                </Pressable>
            </View>
}