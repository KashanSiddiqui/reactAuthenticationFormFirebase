import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase'; 
import { Header, Spinner, Button } from './src/components/common';
import LoginForm from './src/components/loginForm';

export default class App extends React.Component {

    state={
      loggedIn:null
    }

    componentWillMount(){
      firebase.initializeApp({
        apiKey: "AIzaSyCpHayy_iW_Oboc6wwF9wFUgfVRhiygotA",
        authDomain: "aunthentication-reactapp.firebaseapp.com",
        databaseURL: "https://aunthentication-reactapp.firebaseio.com",
        projectId: "aunthentication-reactapp",
        storageBucket: "aunthentication-reactapp.appspot.com",
        messagingSenderId: "559475207005"
      });

      firebase.auth().onAuthStateChanged((user)=>{
        if(user){
          this.setState({loggedIn:true})
        }
        else{
          this.setState({loggedIn:false})
        }
      })
    }


    renderContent(){
      switch(this.state.loggedIn){
        case true:
        return( 
        <Button onPress={() => firebase.auth().signOut()}>
        Log out
        </Button>
          );
        
        case false:
        return <LoginForm/>;
        
        default:
        return <Spinner size="large"/>;
      }
    }

  render() {
    return (
      <View >
        <Header headerText='Aunthentication' />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
