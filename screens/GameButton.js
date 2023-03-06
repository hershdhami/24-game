import { View, Text } from 'react-native'
import { digitf } from './Homescreen'
import Pressable from './Pressable'
import React from 'react'

export default class GameButton extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const { id, whenClicked, viewStyle, textStyle, buttonText} = this.props

        return (<Pressable id={id} activeOpacity={0.7} onPress={whenClicked} style={viewStyle}>
                <Text style={textStyle}> {buttonText} </Text>
            </Pressable>)
    }
}