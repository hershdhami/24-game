import Pressable from './Pressable'
import { Text } from 'react-native'

export default function FindGamePage (props) {
  return(
        <Pressable onPress={props.navigation.navigate("24 GAME")}>
            <Text > CLICK ME </Text>
        </Pressable>
  )
}