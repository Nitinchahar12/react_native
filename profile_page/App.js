import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';

export default class Profile extends Component {
  state = {
    textValue: 'Follow'
  }

  onPress = () => {
    this.setState({
      textValue: 'Following'
    })
  }

  render() {
    return (
      <View style={styles.container}>
          <Image style={styles.header} source={require('./assets/pic.jpeg')}/>
          <Image style={styles.avatar} source={require('./assets/pic.jpeg')}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>NITIN CHAHAR <Ionicons name="md-checkmark-circle" size={12} style={{
      alignItems: "center",
      justifyContent: "center",
      textAlign: "right"
    }} color="#383838" /></Text>
              <Text style={styles.info}>FRONT_END DEVELOPER</Text>
              <View style={styles.profileDetail}>
            <View style={styles.detailContent}>
              <Text style={styles.count}>198</Text>
              <Text style={styles.title}>Posts</Text>
            </View>
            <View style={styles.detailContent}>
              <Text style={styles.count}>21M</Text>
              <Text style={styles.title}>Followers</Text>
            </View>
            <View style={styles.detailContent}>
              <Text style={styles.count}>0</Text>
              <Text style={styles.title}>Following</Text>
            </View>
          </View>
          <View style={styles.followButtonMargin}>
            <TouchableOpacity style={styles.followButton} onPress={this.onPress} >
              <Text style={styles.followButtonText}>{this.state.textValue}</Text>  
            </TouchableOpacity>
          </View>
          <View style={styles.postContainer}>
            <Text style={styles.post}>POSTS</Text>
          </View>
          <View style ={styles.imageContainer}>
              <Image style={styles.image} source={require("./assets/pic.jpeg")} />
              <Image style={styles.image} source={require("./assets/pic.jpeg")} />
            </View>
          </View>
         
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    height:150
  },
  pics:{
    width: 50,
    height: 50
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:80,
  },
  post:{
    left: 10,
    marginTop:110,
    fontSize:20,
    fontWeight:"bold",
    color: "#383838",
    alignItems: 'baseline',
    position:'absolute',
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  profileDetail:{
    alignSelf: 'center',
    marginTop:100,
    alignItems: 'center',
    flexDirection: 'row',
    position:'absolute',
    backgroundColor: "#ffffff"
  },
  detailContent:{
    margin:10,
    alignItems: 'center'
  },
  title:{
    fontSize:14,
    color: "#696969"
  },
  count:{
    fontSize:25,
    fontWeight: "bold"
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:12,
    color: "#696969",
    marginTop:5
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  followButtonMargin:{
    marginTop:40
  },
  followButton: {
    marginTop:50,
    height:35,
    width:100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#6E6E6E",
  },
  followButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
  imageContainer: {
    left: 5,
    marginTop: 100,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image:{
    marginRight: 10,
    width: Dimensions.get('window').width/2 - 10,
    height: Dimensions.get('window').width/2 - 10
  },
  postContainer: {
    marginTop: 100,
    width: Dimensions.get('window').width,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});