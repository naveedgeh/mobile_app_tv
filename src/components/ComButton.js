import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'

const ComButton = (props) => {
    return (
        <View>
             <TouchableOpacity
            onPress={props.route}
            style={{...styles.button,...props.styles}}>
                {props.children}
          </TouchableOpacity>
        </View>
    )
}

export default ComButton

const styles = StyleSheet.create({
    button: {
        width: 150,
        height: 50,
        marginHorizontal:5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#00000',
        borderWidth: 1,
        borderRadius: 50,
    
        // backgroundColor:color.btn
      },
})
