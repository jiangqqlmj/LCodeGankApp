'use strict';

import React from 'react';
import {
  Dimensions,
  Image,
  InteractionManager,
  View,
  Text,
} from 'react-native';

import AppMain from '../AppMain';

var {height, width} = Dimensions.get('window');

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {navigator} = this.props;
     this.timer=setTimeout(() => {
      InteractionManager.runAfterInteractions(() => {
        navigator.resetTo({
          component: AppMain,
          name: 'AppMain'
        });
      });
    }, 2500);
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
 
  render() {
    return (
      <View style={{backgroundColor:'#63B8FF',flex:1}}>
      <Image
        style={{width:300,height:313,alignSelf:'center',marginTop:50}}
        source={require('../imgs/welcome_gank.png')}
       />
       <View style={{flex:1,alignItems:'flex-end',flexDirection:'row',marginBottom:10}}>
          <Text style={{flex:1,color:'#fff',fontSize:18,textAlign:'center'}}>干货集中营(gank.io) Version:1.0 </Text>
       </View>
      </View>
    );
  }
}
export default Splash;