import { Text } from 'react-native'
import { operandf } from './Homescreen'
import Pressable from './Pressable'

export default function OperandButton({id, viewStyle, textStyle, buttonText}) {
    return <Pressable id={id} activeOpacity={0.7} onPress={() => operandf(buttonText)} style={viewStyle}>
                <Text style={textStyle}> {buttonText} </Text>
            </Pressable>
}