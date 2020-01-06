import React, { Component } from 'react';
import { StyleSheet,
        Text,
        View,
        AppRegistry

      } from 'react-native';

import WeightAim from './src/weightAim';



export default class App extends React.Component {
  render(){
    let user = {weightNow:45, aimweight:42};

  return (
    <View style={[styles.container]}>
      <View style={[styles.base, styles.header]}>
        <Text style={[styles.text, styles.textBig, styles.textRed, styles.textBold]}>Usakoのきろく</Text>
      </View>

      <View style={[styles.base, styles.today]}>
        <Text style={[styles.text, styles.textBig]}>12月7日</Text>
        <Text style={[styles.text, styles.textMedium]}>13:05</Text>
      </View>

      <View style={[styles.base, styles.weight_today]}>
        <Text style={[styles.text, styles.textPink, styles.textBold,]}>今日の体重は</Text>
        <View style={styles.boxA}>
          <Text style={[styles.text, styles.textWhite, styles.textBig, styles.textBold,]}>{user.weightNow} kg</Text>
        </View>
      </View>
      <WeightAim aim={user.aimweight}/>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },

  // for text-------------------------------------------
  text: {
    fontSize: 24,
    color: 'black',
  },

  textBig: {
    fontSize: 38,
  },

  textMedium: {
    fontSize: 27,
  },

  textSmall: {
    fontSize: 12,
  },

  textWhite: {
    color: 'white',
  },

  textRed: {
    color: 'red',
  },

  textPink: {
    color: '#ff99cc',
  },

  textHotpink: {
    color: 'hotpink',
  },

  textBold: {
    fontWeight: 'bold',
  },

  // for blocks----------------------------------------------------
  base: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxA: {
    width: 200,
    height: 100,
//    backgroundColor: 'lightpink',
    backgroundColor: '#ff99cc',
    alignItems: 'center',
    justifyContent: 'center',
  },

  boxB: {
    width: 120,
    height: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "pink",
    borderWidth: 3,

  },

  header: {
    flex: 3,
    backgroundColor: 'white',
  },

  today: {
    flex: 2,
    backgroundColor: 'white',
  },

  weight_today:{
    flex: 4,
    backgroundColor: 'white',
  },

  weight_aim:{
    flex: 2,
    backgroundColor: 'white',
  },

});

AppRegistry.registerComponent('Native', () => App);
