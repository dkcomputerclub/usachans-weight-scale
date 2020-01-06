import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';

class WeightAim extends React.Component {
  render(){
    return(
          <View style={[{flex :8, flexDirection : 'row'}, styles.base, styles.weightAim, {flexDirection: 'row'}]}>
            <View style={{flex :2,}, [styles.base]}>
              <Text style={[styles.textMedium, styles.textPink]}>  目標体重  </Text>
            </View>

            <View style={{flex :30,}, [styles.base, styles.box]}>
              <Text style={[styles.textBig, styles.textHotpink, styles.textBold]}> 42 kg </Text>
            </View>
          </View>

    );
  }
}

const styles = StyleSheet.create({
//for text-------------

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

box: {
  width: 120,
  height: 60,
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  borderColor: "pink",
  borderWidth: 3,

},

weightAim: {
  flex: 2,
  backgroundColor: 'white',
},

});

export default WeightAim;
