import { View, Pressable, Text } from 'react-native'

export default function OperandButton({id, viewStyle, textStyle, buttonText, dispatch}) {
    return <View id={id} style={viewStyle}> 
                <Pressable onPress={() => dispatch({dispatch, buttonText})}>
                    <Text style={textStyle}> {buttonText} </Text>
                </Pressable>
            </View>
}