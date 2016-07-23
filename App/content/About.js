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
          <TouchableOpacity>
            <View style={styles.containerItem}>
               <Text style={styles.containerItem_title}>Android：学习AIDL，这一篇文章就够了(上)Android：学习AIDL，这一篇文章就够了(上)Android：学习AIDL，这一篇文章就够了(上)</Text>
               <View style={{flex:1,flexDirection:'row',marginTop:3}}>
                  <Text style={styles.containerItem_title_sub}>推荐人:Dear宅学长</Text>
                  <Text style={styles.containerItem_time_sub}>2015-07-22 21:50</Text>
               </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.containerItem}>
               <Image 
                 source={{uri:'http://ww4.sinaimg.cn/large/610dc034jw1f5xwnxj2vmj20dw0dwjsc.jpg'}}
                 style={{width:Dimensions.get('window').width,height:100}}
               />
               <View style={{flex:1,flexDirection:'row',marginTop:3}}>
                  <Text style={styles.containerItem_title_sub}>推荐人:Dear宅学长</Text>
                  <Text style={styles.containerItem_time_sub}>2015-07-22 21:50</Text>
               </View>
            </View>
          </TouchableOpacity>
      </View>
    );
  }
}
let styles = StyleSheet.create({
    content:{
      backgroundColor:'#fff',
      flex:1,
    },
    containerItem:{
      flexDirection: 'column',
      backgroundColor: '#fcfcfc',
      marginTop:2,
      marginBottom:2,
      margin:5,
      padding:5,
      borderBottomColor: '#ddd',
      borderBottomWidth: 1
    },
    containerItem_title:{
      color:'#63B8FF',
      flex:1,
      fontSize:16,
    },
    containerItem_title_sub:{
      color:'#cccccc',
      fontSize:13,
    },
    containerItem_time_sub:{
      color:'#cccccc',
      fontSize:13,
      flex:1,
      alignItems:'flex-end',
      textAlign:'right',
    }
});
export default About;