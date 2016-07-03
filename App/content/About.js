'use strict';

import React from 'react';
import {
  Dimensions,
  Image,
  View,
  Text,
  StyleSheet,
} from 'react-native';

class About extends React.Component {
  constructor(props) {
    super(props);
  } 
  render() {
    return (
      <View style={styles.content}>
        <Text>关于我们</Text>
      </View>
    );
  }
}
let styles = StyleSheet.create({
    content:{
      backgroundColor:'#fff',
      flex:1,
    }
});
export default About;