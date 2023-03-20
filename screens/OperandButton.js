import { Text } from 'react-native'
import Pressable from './Pressable'
import React from 'react'

export default class OperandButton extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const {id, viewStyle, buttonText, textStyle, whenClicked} = this.props
        return (<Pressable id={id} activeOpacity={0.7} onPress={whenClicked} style={viewStyle}>
                <Text style={textStyle}> {buttonText} </Text>
                </Pressable>)
    }
    
}