import { View, Pressable, Text } from 'react-native'
import { dimBrightness } from './Homescreen'
import { Button } from 'react-native-paper'

export default function GameButton({viewStyle, textStyle, buttonText }) {
    return <Button style={viewStyle} onPress={() => dimBrightness()}>
                    {buttonText}
            </Button>
}