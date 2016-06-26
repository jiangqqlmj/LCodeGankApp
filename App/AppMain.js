/**
* 项目主框架页面效果
*/
'use strict';
import React, {PropTypes} from 'react';
import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Image,
  Platform,
  ToastAndroid,
  DrawerLayoutAndroid,
} from 'react-native';
import DrawerLayout from 'react-native-drawer-layout';
import ReadingTabBar from './component/ReadingTabBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
var CATEGORIES=["Android","iOS","福利","前端"];
var _typeIds = [0,1,2,3];
//this.drawer.closeDrawer()进行关闭侧滑菜单
//this.drawer.openDrawer()进行打开侧滑菜单
class AppMain extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
       drawerLockMode: 'unlocked',
       appTitle:'干货集中营',
      }
  }
  //渲染每一个Item的内容布局
  renderItemView(typeId){
    if(typeId==0){
            return(<View><Text>Android内容</Text></View>);
    }else if(typeId===1){
            return(<View><Text>iOS内容</Text></View>);
    }else if(typeId===2){
            return(<View><Text>福利内容</Text></View>);
    }else if(typeId===3){
            return(<View><Text>前端内容</Text></View>);
    }
  }
  //侧滑菜单功能视图
  renderNavigationView() {
    return(
      <View style={{backgroundColor: '#FCFCFC',flex:1}}>
          <View style={{backgroundColor: '#63B8FF',width:300,height:160}}>
             <Text style={styles.left_drawer_top_tv}>干货集中营</Text>
          </View>
          <View style={{marginTop:10,backgroundColor:'#d3d3d3',width:300,height:0.4}}></View> 
          <View style={styles.left_drawer_item}>
               <Image source={require('./imgs/icon_fuli.png')} style={styles.left_drawer_item_img}/>
               <Text style={styles.left_drawer_item_tv}>福利</Text>
          </View>
          <View style={styles.left_drawer_item}>
               <Image source={require('./imgs/icon_time.png')} style={styles.left_drawer_item_img}/>
               <Text style={styles.left_drawer_item_tv}>时间浏览</Text>
          </View>
          <View style={styles.left_drawer_item}>
               <Image source={require('./imgs/icon_category.png')} style={styles.left_drawer_item_img}/>
               <Text style={styles.left_drawer_item_tv}>分类浏览</Text>
          </View>
          <View style={styles.left_drawer_item}>
               <Image source={require('./imgs/icon_collect_no.png')} style={styles.left_drawer_item_img}/>
               <Text style={styles.left_drawer_item_tv}>收藏</Text>
          </View>
          <View style={{backgroundColor:'#d3d3d3',width:300,height:0.5}}></View> 

          <Text style={{fontSize:13,color:'#d1d1d1',marginTop:10,marginLeft:20}}>其他</Text>
          <View style={styles.left_drawer_item}>
               <Image source={require('./imgs/icon_setup.png')} style={styles.left_drawer_item_img}/>
               <Text style={styles.left_drawer_item_tv}>设置</Text>
          </View>
          <View style={styles.left_drawer_item}>
               <Image source={require('./imgs/icon_share.png')} style={styles.left_drawer_item_img}/>
               <Text style={styles.left_drawer_item_tv}>分享</Text>
          </View>
          <View style={styles.left_drawer_item}>
               <Image source={require('./imgs/icon_feedback.png')} style={styles.left_drawer_item_img}/>
               <Text style={styles.left_drawer_item_tv}>意见反馈</Text>
          </View>
          <View style={styles.left_drawer_item}>
               <Image source={require('./imgs/icon_about.png')} style={styles.left_drawer_item_img}/>
               <Text style={styles.left_drawer_item_tv}>关于我们</Text>
          </View>
          <View style={{backgroundColor:'#d3d3d3',width:300,height:0.5}}></View> 
      </View>
      );
  }  


  render(){
    const {read, navigator} = this.props;
    var lists = [];
    _typeIds.forEach((typeId) => {
      lists.push(
        <View
          key={typeId}
          tabLabel={CATEGORIES[typeId]}
          style={{flex:1}}
        >
        {this.renderItemView(typeId)}
        </View>
        );
    });
    return (
      <DrawerLayout
        drawerWidth={300}
        drawerPosition={Platform.OS === 'android' ? DrawerLayoutAndroid.positions.Left : 'left'}
        ref={(drawer) => { return this.drawer = drawer  }}
        renderNavigationView={this.renderNavigationView}>
        <View style={{backgroundColor:'#fff',flex:1}}>
          <View style={{height:45,flexDirection:'row',backgroundColor: '#63B8FF'}}>
            <TouchableHighlight onPress={() => this.drawer.openDrawer()}>
              <Image source={require('./imgs/icon_menu2.png')} style={{width:45,height:45,marginLeft:10}}/>
            </TouchableHighlight>
              <Text style={{fontSize:16,flex:1,color:'#fff',textAlignVertical:'center'}}>{this.state.appTitle}
              </Text>
          </View>
          <ScrollableTabView
            renderTabBar={() => <ReadingTabBar />}
            tabBarBackgroundColor="#fcfcfc"
            tabBarUnderlineColor="#3e9ce9"
            tabBarActiveTextColor="#3e9ce9"
            tabBarInactiveTextColor="#aaaaaa"
            onChangeTab={(event)=>{
              ToastAndroid.show('选中:'+event.i,ToastAndroid.SHORT);
            }}
          >
          {lists}
          </ScrollableTabView>
        </View>
      </DrawerLayout>
    );
  }
}
let styles = StyleSheet.create({
  left_drawer_top_tv:{
    color:'#fff',
    fontSize:28,
    flex:1,
    fontStyle:'italic',
    fontWeight:'bold',
    textAlign:'center',
    textAlignVertical:'center'
  },
  left_drawer_item:{
    width:300,
    height:40,
    flexDirection:'row',
  },
  left_drawer_item_img:{
     width:22,
     height:22,
     marginLeft:20,
     margin:9,

  },
  left_drawer_item_tv:{
    fontSize:16,
    flex:1,
    color:'black',
    marginLeft:5,
    textAlignVertical:'center'
  },
});

module.exports = AppMain;
