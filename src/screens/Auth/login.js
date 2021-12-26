import React from "react";
import { View,ScrollView,Text,StyleSheet } from "react-native";
import LoginHeader from "../../components/AuthComponents/LoginHeader";
import LoginBody from "../../components/AuthComponents/LoginBody";
import LoginFooter from "../../components/AuthComponents/LoginFooter";

const Login=({navigation})=>{
    return (
        
        <View style={styles.container} >
            <LoginHeader/>
            <LoginBody navigation={navigation}/>
            {/* <LoginFooter/> */}
        </View>
       
    );
}
const styles=StyleSheet.create({
    container:{
        //flex:"row",
        justifyContent:"center",
        alignItems:"center",
    }
});

export default Login;