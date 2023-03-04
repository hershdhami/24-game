import { View, Text } from 'react-native'
import { digitf } from './Homescreen'
import Pressable from './Pressable'


export default function GameButton({viewStyle, textStyle, buttonText, id}) {
    return <Pressable id={id} activeOpacity={0.7} onPress={() => digitf(buttonText, this)} style={viewStyle}>
                <Text style={textStyle}> {buttonText} </Text>
            </Pressable>
}