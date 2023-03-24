import { Modal, View, StyleSheet } from 'react-native';
import Pressable from './Pressable'
import React from 'react'
import { Button } from 'react-native-paper'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Text } from 'react-native-paper';

export default class IconButton extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const {isVisible, onClose, score} = this.props
        return (
            <Modal animationType="slide" transparent={true} visible={isVisible}>
                <View style={winningStyles.modalContent}>
                  <Text style={winningStyles.textStyle}> Congrats on winning!! </Text>
                  <Pressable onPress={onClose}>
                    <Button labelStyle={{color: "white", fontSize: 20, textAlign:"center"}}> Play Again </Button>
                  </Pressable>
                  <Text style={winningStyles.textStyle}> Your Score is: {score} </Text>
                </View>
            </Modal>)
    }
    
}

const winningStyles = StyleSheet.create({
    modalContent: {
      height: '30%',
      width: '100%',
      backgroundColor: "#483d8b",
      borderTopRightRadius: 18,
      borderTopLeftRadius: 18,
      borderBottomLeftRadius: 18,
      borderBottomRightRadius: 18,
      borderColor: "black",
      borderWidth: 4,
      position: 'absolute',
      textAlign: 'center',
      bottom: '32.5%',
    },
    titleContainer: {
      height: '16%',
      backgroundColor: '#464C55',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    textStyle: {
      color: "white",
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 32
    },
    title: {
      color: '#fff',
      fontSize: 16,
    },
    pickerContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 50,
      paddingVertical: 20,
    },
  });