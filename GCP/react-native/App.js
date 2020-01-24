import React, { Component } from 'react';
import { StyleSheet,
        Text,
        View,
        AppRegistry

      } from 'react-native';

import * as firebase from "firebase/app";
import "firebase/firestore";
import WeightAim from './src/weightAim';

export default class App extends React.Component {

  state = {
    month_date: "0/0",
    hours_minutes: "0:00",
    weightNow: 0,
    aimweight: 45
  };

  componentWillMount() {
    if (!firebase.apps.length) {
      try {
        firebase.initializeApp({

        });
      } catch (err) {
          console.error('Firebase initialization error raised', err.stack)
      }
    }
  }

  render(){
    const db = firebase.firestore();
    var citiesRef = db.collection("weights");
    citiesRef.orderBy('datetime', 'desc').limit(1).get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.data();
        date = data.date;
        time = data.time;
        console.log(date)
        console.log(time)

        // let date = data.date.toDate();
        // month = date.getMonth()+1;
        // date = date.getDate();
        // // hours = date.getHours();
        // // minutes = date.getMinutes();
        // month_date = month.toString() + "月" + date.toString() + "日";
        // hours_minutes = hours.toString() + ":" + minutes.toString();
        this.setState({ month_date: date,
                        hours_minutes: time,
                        weightNow: data.weight });
        });

      });

    return (
      <View style={[styles.container]}>
        <View style={[styles.base, styles.header]}>
          <Text style={[styles.text, styles.textBig, styles.textRed, styles.textBold]}>Usakoのきろく</Text>
        </View>

        <View style={[styles.base, styles.today]}>
    <Text style={[styles.text, styles.textBig]}>{this.state.month_date}</Text>
          <Text style={[styles.text, styles.textMedium]}>{this.state.hours_minutes}</Text>
        </View>

        <View style={[styles.base, styles.weight_today]}>
          <Text style={[styles.text, styles.textPink, styles.textBold,]}>今日の体重は</Text>
          <View style={styles.boxA}>
            <Text style={[styles.text, styles.textWhite, styles.textBig, styles.textBold,]}>{this.state.weightNow} kg</Text>
          </View>
        </View>
        <WeightAim aim={this.state.aimweight}/>
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