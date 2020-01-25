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
      <View style={[styles.header]}>
        <Text style={[styles.textHeader]}>Usakoのきろく</Text>
      </View>

      <View style={[styles.today]}>
        <Text style={[styles.textDate]}>12月7日</Text>
        <Text style={[styles.textTime]}>13:05</Text>
      </View>

      <View style={[styles.base, styles.weight_today]}>
        <Text style={[styles.text, styles.textTodaysWeight]}>今日の体重は</Text>
        <View style={styles.boxA}>
          <Text style={[styles.textWeightNow]}>{user.weightNow} kg</Text>
        </View>
      </View>
      <WeightAim aim={user.aimweight}/>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  //for container--------------------------
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    justifyContent: 'center',
  },

  //for texts------------------------------

  text: {
    fontSize: 24,
    color: 'black',
  },

  textHeader: {
    fontSize: 38,
    color: 'red',
    fontWeight: 'bold',
  },

  textDate: {
    fontSize: 38,
    color: 'black',
  },

  textTime: {
    fontSize: 28,
  },

  textWeightNow: {
    fontSize: 38,
    color: 'white',
    fontWeight: 'bold',
  },

  textTodaysWeight: {
    fontSize: 28,
    color: '#ff99cc',
    fontWeight: 'bold',
  },

  // for blocks----------------------------------------------------
  base: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
//    borderColor: 'grey',
//    borderWidth: 1,
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
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3,
    backgroundColor: 'white',
  },

  today: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    backgroundColor: 'white',
  },

  weight_today:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 4,
    backgroundColor: 'white',
  },

  weight_aim:{
    flex: 2,
    backgroundColor: 'white',
  },

});

AppRegistry.registerComponent('Native', () => App);
