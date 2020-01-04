import React, { Component } from 'react';
import t from 'tcomb-form-native'; 
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const Form = t.form.Form;

const User = t.struct({
  name: t.String,
  username: t.String,
  status: t.String
});
export default class Profile extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.header} source={require('./assets/pic.jpeg')}/>
        <Image style={styles.avatar} source={require('./assets/pic.jpeg')}/>
        <View style={styles.form}>
          <Form style={styles.form} type={User} />  
          <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}>
            <Text style={styles.loginText}>SAVE</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({

  header:{
    height:150
  },
  form:{
    marginTop:100,
    padding: 20,
    
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
    marginTop: 270,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{width: Dimensions.get('window').width/2 - 15,
   height: Dimensions.get('window').width/2- 15,
  
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:320,
    backgroundColor:'transparent'
  },
  loginButton: {
    backgroundColor: "#6E6E6E",
  },
});