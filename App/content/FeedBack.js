/**
 * 反馈页面
 */
'use strict';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
  ToastAndroid,
} from 'react-native';

import { NaviGoBack } from '../utils/CommonUtils';
let content='';
let address='';
class FeedBack extends React.Component {
    constructor(props) {
     super(props);
     this.submitFeed=this.submitFeed.bind(this);     
    }
    //提交反馈信息
    submitFeed(){
      if(content===''){
         ToastAndroid.show('反馈意见不能为空!',ToastAndroid.SHORT);
         return;
      }
      if(address===''){
         ToastAndroid.show('联系方式不能为空!',ToastAndroid.SHORT);
         return;
      }
      ToastAndroid.show('反馈意见:'+content+',联系方式:'+address,ToastAndroid.SHORT);
      
    }
    render(){
  	  return (
         <View style={{backgroundColor:'#fff',flex:1}}>
          <View style={{height:45,flexDirection:'row',backgroundColor: '#63B8FF'}}>
            <TouchableOpacity onPress={() => NaviGoBack(this.props.navigator)}>
               <Image source={require('../imgs/ic_back.png')} style={{width:30,height:30,marginLeft:5,marginTop:7.5}}/>
            </TouchableOpacity>
            <Text style={{fontSize:16,flex:1,color:'#fff',textAlignVertical:'center',marginLeft:10}}>意见反馈</Text>
            <TouchableOpacity onPress={()=>this.submitFeed()}>
               <Text style={{marginRight:8,fontSize:15,color:'white',marginTop:11}}>提交</Text>
            </TouchableOpacity>
          </View>
          <TextInput 
             style={{ fontSize: 16, textAlignVertical: 'top' }}
             placeholder="请写下您宝贵的意见或建议..."
             placeholderTextColor="#aaaaaa"
             underlineColorAndroid="transparent"
             numberOfLines={10}
             ref={'content'}
             multiline={true}
             autoFocus={true}
             onChangeText={(text) => {
                 content = text;
            }}
          />
          <View style={{backgroundColor:'#ccc',width:Dimensions.get('window').white,height:1}}/>
          <TextInput 
             style={{fontSize: 16, textAlignVertical: 'center',height:40}}
             placeholder="请写下您的联系方式"
             placeholderTextColor="#aaaaaa"
             underlineColorAndroid="transparent"
             ref={'address'}
             numberOfLines={1}
             onChangeText={(text) => {
                 address = text;
             }}
           />
          <View style={{backgroundColor:'#ccc',width:Dimensions.get('window').width,height:1}}/>
        </View>  
  	   );
    }
 }
let styles = StyleSheet.create({

});
export default FeedBack;