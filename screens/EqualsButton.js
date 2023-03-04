import { View, Pressable, Text } from 'react-native'
import { equals } from './Homescreen'


export default function EqualsButton({viewStyle, textStyle, buttonText, id}) {
    return <View id={id} style={viewStyle}> 
                <Pressable onPress={() => equals()}>
                    <Text style={textStyle}> {buttonText} </Text>
                </Pressable>
            </View>
}