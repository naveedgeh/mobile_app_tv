import React from 'react';
import { Text, View,Image,StyleSheet } from 'react-native';
import Color from "../../constants/color";
import Images from '../../constants/images';


const loginHeader=()=>{
        return (
            <View style={styles.headerContainer}>
                <View style={styles.headerContainer}>
                <Text style={{color:Color.fontColor,fontSize:25}}>Welcome</Text>
                <Image style={{width:"70%",height:50}} source={Images.logo}/>
                {/* <Text style={{color:Color.fontColor,fontSize:25}}>Login Header</Text> */}
                </View>
            </View>
        );
}
const styles=StyleSheet.create({
    headerContainer:{
        backgroundColor:Color.backgroundColor,
        width:"100%",
        height:"50%",
        justifyContent:"center",
        alignItems:"center"
    },
    logoContainer:{
            marginVertical:100
    }
})
export default loginHeader;