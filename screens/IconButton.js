import Pressable from './Pressable'
import React from 'react'
import { Button } from 'react-native-paper'

export default class IconButton extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const {id, viewStyle, icon, whenClicked} = this.props
        return (
            (<Pressable id={id} activeOpacity={0.7} onPress={whenClicked} style={viewStyle}>
                <Button labelStyle={{color: "white", fontSize: 25}} icon={icon}> </Button>
                </Pressable>)
                )
    }
    
}