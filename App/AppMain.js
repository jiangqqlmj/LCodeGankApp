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
  TouchableOpacity,
  View,
  Image,
  Platform,
  ToastAndroid,
  DrawerLayoutAndroid,
  InteractionManager,
  ListView,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import DrawerLayout from 'react-native-drawer-layout';
import ReadingTabBar from './component/ReadingTabBar';

import About from './content/About';
import FeedBack from './content/FeedBack';
import WebViewDetails from './content/WebViewDetails';
import {request} from './utils/Common';
import LoadingView from './component/LoadingView';
let page = 1;
//this.drawer.closeDrawer()进行关闭侧滑菜单
//this.drawer.openDrawer()进行打开侧滑菜单
class AppMain extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
       drawerLockMode: 'unlocked',
       appTitle:'最近一天数据',
       dataSource: new ListView.DataSource({
           rowHasChanged: (row1, row2) => row1 !== row2,
         }),
       articleList:[],
       loading:true,
      }
    this.renderNavigationView = this.renderNavigationView.bind(this); 
    this.renderItem = this.renderItem.bind(this); 
    this.renderFooter = this.renderFooter.bind(this);
    this.onPress=this.onPress.bind(this);
  }

  //组件挂载之后进行请求网络
  componentDidMount() {
      //day/2015/08/07
      request('day/2016/07/28','get')
        .then((result) => {
           this.setState({articleList:result.results.Android,loading:false});
        })
        .catch((e) => {
           ToastAndroid.show('加载失败,请重试'+e,ToastAndroid.SHORT);
          this.setState({loading:false});
      });
  }

  //进行侧面功能
  onPressDrawerItem(index) {
    const {navigator} = this.props;
    this.refs.drawer.closeDrawer();
    switch (index) {
      case 0:
        
        break;
      case 1:
        break;
      case 2:
        InteractionManager.runAfterInteractions(() => {
          navigator.push({
            component: FeedBack,
            name: 'FeedBack'
          });
        });
        break;
      case 3:
        InteractionManager.runAfterInteractions(() => {
          navigator.push({
            component: About,
            name: 'About'
          });
        });
        break;
      default:
        break;
    }
  }
  onEndReached(typeId) {
     
  }
  renderFooter() {
    return (
        <View
          style={{ flex: 1, flexDirection: 'row', justifyContent: 'center',
            alignItems: 'center', padding: 5 }}
        >
          <ActivityIndicator size="small" color="#3e9ce9" />
          <Text style={{ textAlign: 'center', fontSize: 16, marginLeft: 10 }}>
            数据加载中……
          </Text>
        </View>
      );
  }
  //点击Item跳转详情页面
  onPress(article) {
    const { navigator } = this.props;
    InteractionManager.runAfterInteractions(() => {
      navigator.push({
        component: WebViewDetails,
        name: 'WebViewDetails',
        article
      });
    });
  }
  //渲染每一项的数据
  renderItem(article) {
    return (
      <TouchableOpacity onPress={()=>this.onPress(article)}>
            <View style={styles.containerItem}>
               <Text 
                  style={styles.containerItem_title}>{article.desc}</Text>
               <View style={{flex:1,flexDirection:'row',marginTop:3,alignItems:'flex-end',}}>
                  <Text style={styles.containerItem_title_sub}>推荐人:{article.who}</Text>
                  <Text style={styles.containerItem_time_sub}>{article.publishedAt}</Text>
               </View>
            </View>
      </TouchableOpacity>
    );
  }
  renderContent(dataSource) {
    if (this.state.loading) {
      return <LoadingView />;
    }
    const isEmpty = this.state.articleList === undefined || this.state.articleList.length === 0;
    if (isEmpty) {
      return (
        <ScrollView
          automaticallyAdjustContentInsets={false}
          horizontal={false}
          contentContainerStyle={styles.no_data}
          style={{ flex: 1 }}
          refreshControl={
            <RefreshControl
              refreshing={this.state.loading}
              title="Loading..."
              colors={['#ffaa66cc', '#ff00ddff', '#ffffbb33', '#ffff4444']}
            />
          }
         >
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 16 }}>
              目前没有数据，请刷新重试……
            </Text>
          </View>
        </ScrollView>
      );
    }
    return (
      <ListView
        initialListSize={1}
        dataSource={dataSource}
        renderRow={this.renderItem}
        style={styles.listView}
        onEndReachedThreshold={10}
        renderFooter={this.renderFooter}
        refreshControl={
          <RefreshControl
            refreshing={this.state.loading}
            title="Loading..."
            colors={['#ffaa66cc', '#ff00ddff', '#ffffbb33', '#ffff4444']}
          />
        }
      />
    );
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
          <TouchableOpacity 
            onPress={this.onPressDrawerItem.bind(this,1)}
            >
             <View style={styles.left_drawer_item}>
               <Image source={require('./imgs/icon_share.png')} style={styles.left_drawer_item_img}/>
               <Text style={styles.left_drawer_item_tv}>分享</Text>
             </View>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={this.onPressDrawerItem.bind(this,2)}
            >
            <View style={styles.left_drawer_item}>
               <Image source={require('./imgs/icon_feedback.png')} style={styles.left_drawer_item_img}/>
               <Text style={styles.left_drawer_item_tv}>意见反馈</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={this.onPressDrawerItem.bind(this,3)}
            >
            <View style={styles.left_drawer_item}>
              <Image source={require('./imgs/icon_about.png')} style={styles.left_drawer_item_img}/>
              <Text style={styles.left_drawer_item_tv}>关于我们</Text>
            </View>
          </TouchableOpacity>
          <View style={{backgroundColor:'#d3d3d3',width:300,height:0.5}}></View> 
      </View>
      );
  } 

  render(){
    const {navigator} = this.props;
    return (
      <DrawerLayout
        ref='drawer'
        drawerWidth={300}
        drawerPosition={Platform.OS === 'android' ? DrawerLayoutAndroid.positions.Left : 'left'}
        renderNavigationView={this.renderNavigationView}>
        <View style={{backgroundColor:'#fff',flex:1}}>
          <View style={{height:45,flexDirection:'row',backgroundColor: '#63B8FF'}}>
            <TouchableOpacity onPress={() => this.refs.drawer.openDrawer()}>
              <Image source={require('./imgs/icon_menu2.png')} style={{width:45,height:45,marginLeft:10}}/>
            </TouchableOpacity>
              <Text style={{fontSize:16,flex:1,color:'#fff',textAlignVertical:'center'}}>{this.state.appTitle}
              </Text>
          </View>
          <View style={{flex:1}}>
            {this.renderContent(this.state.dataSource.cloneWithRows(
                  this.state.articleList === undefined ? [] : this.state.articleList))}
          </View>
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
  no_data: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100
  },
  containerItem:{
      flexDirection: 'column',
      backgroundColor: '#fcfcfc',
      padding: 5,
      marginTop:2,
      margin:5,
      borderBottomColor: '#ddd',
      borderBottomWidth: 1,
      flex:1,
    },
    containerItem_title:{
      color:'#63B8FF',
      flex:1,
      fontSize:16,
      paddingBottom:8,
    },
    containerItem_title_sub:{
      color:'#cccccc',
      fontSize:13,
      flex:1,
    },
    containerItem_time_sub:{
      color:'#cccccc',
      fontSize:13,
      flex:1,
      alignItems:'flex-end',
      textAlign:'right',
    },
    listView: {
    backgroundColor: '#eeeeec'
  },
});

export default AppMain;
