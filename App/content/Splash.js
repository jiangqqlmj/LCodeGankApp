'use strict';

import React from 'react';
import {
  Dimensions,
  Image,
  InteractionManager
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
    }, 3500);
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
 
  render() {
    return (
      <Image
        style={{width: width, height: height}}
        source={require('../imgs/splash.png')}
      />
    );
  }
}
export default Splash;