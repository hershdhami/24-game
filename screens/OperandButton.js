import { View, Pressable, Text } from 'react-native'
import { operandf } from './Homescreen'

export default function OperandButton({id, viewStyle, textStyle, buttonText, dispatch}) {
    return <View id={id} style={viewStyle}> 
                <Pressable onPress={() => operandf(buttonText)}>
                    <Text style={textStyle}> {buttonText} </Text>
                </Pressable>
            </View>
}