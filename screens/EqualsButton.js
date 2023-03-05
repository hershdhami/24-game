import { Text } from 'react-native'
import { equals } from './Homescreen'
import Pressable from './Pressable'


export default function EqualsButton({viewStyle, textStyle, buttonText, id}) {
    return <Pressable id={id} activeOpacity={0.7} style={viewStyle} onPress={() => equals()}>
                <Text style={textStyle}> {buttonText} </Text>
            </Pressable>
                
}