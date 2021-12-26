import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import color from '../../constants/color';
import {Login} from '../../screens';
import Input from '../Input';
import ComButton from '../ComButton';
const loginBody = ({navigation}) => {
  const [text, onChangeText] = useState('');
  const [dims, CheckDimension] = useState('');
  const checkLandOrPort = () => {
    Dimensions.get('window').width >= Dimensions.get('window').height
      ? CheckDimension('landscap')
      : CheckDimension('portable');
  };
  return (
    <ScrollView onLayout={() => checkLandOrPort()}>
      <View style={styles.screen}>
        <Text>Please insert the registration code below</Text>
        <View
          style={
            dims === 'portable' ? styles.portcontainer : styles.langContainer
          }>
          <Input
            onChangeText={v => onChangeText(v)}
            text={text}
            placeholder="Registration Code"
          />
          <View style={styles.btnContainer}>
            <ComButton
              route={() => {
                navigation.navigate('Dashboard');
              }}>
              <Text style={styles.text}>Login</Text>
            </ComButton>
            <ComButton
              route={() => {
                navigation.navigate('Dashboard');
              }}>
              <Text style={styles.text}>Back Up</Text>
            </ComButton>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: '50%',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    alignItems: 'center',
    marginVertical: 30,
  },
  portcontainer: {
    alignItems: 'center',
    // marginVertical:40,
  },
  langContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  text: {
    color: color.btn,
    fontSize: 20,
  },
  btnContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default loginBody;
