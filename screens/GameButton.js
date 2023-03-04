import { View, Pressable, Text } from 'react-native'
import { digitf } from './Homescreen'


export default function GameButton({viewStyle, textStyle, buttonText, id}) {
    return <View id={id} style={viewStyle}> 
                <Pressable onPress={() => digitf(buttonText, this)}>
                    <Text style={textStyle}> {buttonText} </Text>
                </Pressable>
            </View>
}