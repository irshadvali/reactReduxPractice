import React, { Component } from 'react';
import {
  StyleSheet,
  Text,Image,
  View,TouchableHighlight,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

var SCREEN_WIDTH = require('Dimensions').get('window').width;
var SCREEN_HEIGHT = require('Dimensions').get('window').height;
class NotifyListItem  extends Component{
    constructor(props){
    super(props);
    this.state = {
        };
    }

  render() {
      const { data } = this.props;
      var selectedStyle;
      var buttonStyle;
      var color;
      if (data.actnotifytype === "7"){
        selectedStyle = { backgroundColor: 'red' };
        buttonStyle = 'ios-alert';
        color= 'red';
      }else if (data.actnotifytype === "5"){
        selectedStyle = { backgroundColor: 'white' };
        buttonStyle = 'md-arrow-down';
        color= 'red';
      }else if (data.actnotifytype === "102"){
        selectedStyle = { backgroundColor: 'white' };
        buttonStyle = 'ios-flash';
        color= 'orange';
      }
      
      else if (data.actnotifytype === "4"){
        selectedStyle = { backgroundColor: 'white' };
        buttonStyle = 'ios-checkmark-circle';
        color= 'green';
      }else{
        selectedStyle = { backgroundColor: 'white' };
        buttonStyle = 'ios-notifications-outline';
        color= 'black';
      }
    return (
      <TouchableHighlight>
    
      <View style={styles.container}>
      <View style={[styles.indicatorColor,selectedStyle]}>
       </View>
       <View style={{flexDirection:'column',marginLeft:10}}>
        <View style={{flexDirection:'row'}}>
        <Icon name={buttonStyle} size={20} style={styles.welcomeImage} color={color} />
    
    <Text style={styles.Desc11}>{data.notifytype}</Text> 
       </View>
       <View style={{flex:1}}>
         <Text style={styles.Desc} numberOfLines ={3}>{data.msg}</Text> 
         <Text  style={styles.Desc1}>{data.nfmtdt}</Text> 
        </View>
      

        </View>
        </View>

        </TouchableHighlight>
      
    );
  }

}
const styles = StyleSheet.create({
    indicatorColor:{width:8,height:100},
  container: {justifyContent: 'flex-start',backgroundColor: '#F5FCFF',height: 120,flex:1 ,margin : 3,flexDirection:'row',paddingTop:5},
  welcomeImage : {width : 20, height : 20,},
  Desc11:{backgroundColor:'transparent',textAlign: 'left',backgroundColor : '#fff',color:'black',fontWeight:'500'},
  Desc:{marginRight:3,fontSize:17},
  Desc1:{marginTop:5,color:'#8A8A8A',backgroundColor : '#F0F0F0', width:120,textAlign:'center'}
});

export default NotifyListItem;