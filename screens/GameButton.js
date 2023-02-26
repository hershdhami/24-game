import { View, Pressable, Text } from 'react-native'

export default function GameButton({viewStyle, textStyle, buttonText}) {
    return <View style={viewStyle}> 
                <Pressable>
                    <Text style={textStyle}> {buttonText} </Text>
                </Pressable>
            </View>
}