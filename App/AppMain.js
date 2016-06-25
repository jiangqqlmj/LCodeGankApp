/**
* 项目主框架页面效果
*/
'use strict';
var React = require('react');
var ReactNative = require('react-native');
const {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Image,
} = ReactNative;
var DrawerLayout = require('react-native-drawer-layout');
var DrawerLockModeSwitches = React.createClass({

  render: function() {
    const {
      value,
      onValueChange,
    } = this.props;

    return (
      <View>
        <View style={[styles.container, styles.split]}>
          <Switch onValueChange={value => value ? onValueChange('unlocked') : onValueChange('unlocked')} value={value === 'unlocked'} />
          <Text style={styles.spacedLeft}>Unlocked</Text>
        </View>
        <View style={[styles.container, styles.split]}>
          <Switch onValueChange={value => value ? onValueChange('locked-closed') : onValueChange('unlocked')} value={value === 'locked-closed'} />
          <Text style={styles.spacedLeft}>locked-closed</Text>
        </View>
        <View style={[styles.container, styles.split]}>
          <Switch onValueChange={value => value ? onValueChange('locked-open') : onValueChange('unlocked')} value={value === 'locked-open'} />
          <Text style={styles.spacedLeft}>locked-open</Text>
        </View>
      </View>
    );
  }
});
var AppMain = React.createClass({
  getInitialState() {
    return {
      drawerLockMode: 'unlocked',
    };
  },
  //this.drawer.closeDrawer()进行关闭侧滑菜单
  //this.drawer.openDrawer()进行打开侧滑菜单
  render: function() {
    const {
      drawerLockMode,
    } = this.state;
    const navigationView = (
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

    return (
      <DrawerLayout
        onDrawerSlide={(e) => this.setState({drawerSlideOutput: JSON.stringify(e.nativeEvent)})}
        onDrawerStateChanged={(e) => this.setState({drawerStateChangedOutput: JSON.stringify(e)})}
        drawerWidth={300}
        drawerLockMode={drawerLockMode}
        ref={(drawer) => { return this.drawer = drawer  }}
        keyboardDismissMode="on-drag"
        renderNavigationView={() => navigationView}>
        <View style={{height:45,flexDirection:'row',backgroundColor: '#63B8FF'}}>
          <TouchableHighlight onPress={() => this.drawer.openDrawer()}>
            <Image source={require('./imgs/icon_menu2.png')} style={{width:45,height:45,marginLeft:10}}/>
          </TouchableHighlight>
            <Text style={{fontSize:16,flex:1,color:'#fff',textAlignVertical:'center'}}>福利
            </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.welcome}>内容界面</Text>
        </View>
      </DrawerLayout>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  inputField: {
    backgroundColor: '#F2F2F2',
    height: 40,
  },
  split: {
    flexDirection: 'row',
  },
  spacedLeft: {
    paddingLeft: 10,
  },
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
