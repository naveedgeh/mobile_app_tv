import React from 'react'
import {
    Text,
    View,
    TextInput,
    StyleSheet,
  } from 'react-native';

const Input = (props) => {
    return (
        <View>
            <TextInput
            style={{...styles.input,...props.styles}}
            onChangeText={props.onChangeText}
            value={props.text}
            placeholder={props.placeholder}
            {...props}
        />
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 60,
        width: 300,
        margin: 12,
        borderWidth: 1,
        borderRadius:50,
        padding: 20,
        fontSize:20,
      },
})
export default Input


