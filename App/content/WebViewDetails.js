'use strict';

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  WebView,
  BackAndroid,
} from 'react-native';

import { NaviGoBack } from '../utils/CommonUtils';
import LoadingView from '../component/LoadingView';

let canGoBack = false;

class WebViewDetails extends React.Component {
    constructor(props) {
     super(props);
     this.goBack = this.goBack.bind(this);
     this.onNavigationStateChange = this.onNavigationStateChange.bind(this);
    }
    componentDidMount() {
      BackAndroid.addEventListener('hardwareBackPress', this.goBack);
    }

    componentWillUnmount() {
      BackAndroid.removeEventListener('hardwareBackPress', this.goBack);
    }
    renderLoading() {
      return <LoadingView />;
    }
    onNavigationStateChange(navState) {
      canGoBack = navState.canGoBack;
    }

    goBack() {
      if(canGoBack){
        this.refs.webview.goBack();
        return true;
      }
      return NaviGoBack(this.props.navigator);
     }
   
    render(){
      const {navigator,route} = this.props;
  	  return (
         <View style={{backgroundColor:'#fff',flex:1}}>
          <View style={{height:45,flexDirection:'row',backgroundColor: '#63B8FF'}}>
            <TouchableOpacity onPress={() => this.goBack()}>
              <Image source={require('../imgs/ic_back.png')} style={{width:30,height:30,marginLeft:5,marginTop:7.5}}/>
            </TouchableOpacity>
              <Text style={{fontSize:16,flex:1,color:'#fff',textAlignVertical:'center',marginLeft:10}}>干货详情</Text>
          </View>
          <WebView
           ref="webview"
           automaticallyAdjustContentInsets={false}
           style={{ flex: 1 }}
           source={{ uri: route.article.url}}
           javaScriptEnabled = {true}
           domStorageEnabled = {true}
           startInLoadingState = {true}
           scalesPageToFit ={true}
           decelerationRate="normal"
           onShouldStartLoadWithRequest={() => {
            const shouldStartLoad = true;
            return shouldStartLoad;
            }}
           onNavigationStateChange={this.onNavigationStateChange}
           renderLoading={this.renderLoading}
          />
        </View>
  	   );
    }
 }
let styles = StyleSheet.create({
    
});
export default WebViewDetails;