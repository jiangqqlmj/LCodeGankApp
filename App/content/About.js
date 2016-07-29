/**
 * 关于我们
 */
'use strict';
import React from 'react';
import {
  Dimensions,
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { NaviGoBack } from '../utils/CommonUtils';

class About extends React.Component {
  constructor(props) {
    super(props);
  } 
  render() {
    return (
       <View style={{backgroundColor:'#fff',flex:1}}>
          <View style={{height:45,flexDirection:'row',backgroundColor: '#63B8FF'}}>
            <TouchableOpacity onPress={() => NaviGoBack(this.props.navigator)}>
              <Image source={require('../imgs/ic_back.png')} style={{width:30,height:30,marginLeft:5,marginTop:7.5}}/>
            </TouchableOpacity>
            <Text style={{fontSize:16,flex:1,color:'#fff',textAlignVertical:'center',marginLeft:10}}>关于我们</Text>
          </View>
          <View style={{alignItems:'center',marginTop:10}}>
             <Image source={require('../imgs/ic_launcher.png')} style={{width:120,height:120}}/>
             <Text style={styles.text_version}>V0.1.0</Text>
          </View>
          <View style={{alignItems:'center',marginTop:10}}>
            <Text style={{fontSize:15,color:'black'}}>干货集中营,每天午间更新福利哦~</Text>
          </View>
          <View style={{marginBottom:10,flex:1}}>
             <View style={styles.text_right}>
               <View style={{flexDirection:'row'}}>
                  <Text>免责声明:所有内容均来自:</Text>
                  <Text style={{color:'#63B8FF'}}>http://gank.io</Text>
               </View>   
               <View>
                  <Text style={{color:'#63B8FF'}}>https://github.com/jiangqqlmj/LCodeGankApp</Text>
               </View>
             </View>
          </View>
      </View>
    );
  }
}
let styles = StyleSheet.create({
   text_version:{
      color:'#ddd', 
   },
   text_right:{
      alignSelf:'center',
      alignItems:'center',
      flex:1,
      justifyContent:'flex-end'
   }
});
export default About;