import React from 'react';
import firebase from 'firebase';
import { Card, CardSection, Button, Input, Spinner } from './common';
import { Text } from 'react-native'

class LoginForm extends React.Component {

    
  state={
      email:'',
      password:'',
      error:'',
      loading: false
  }

  onButtonPress(){
    const { email, password}= this.state;

    this.setState({error:'', loading:true})

    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(this.onLoginSuccess.bind(this))
    .catch(()=>{
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this))
    })
  }

  renderButton(){
    if(this.state.loading){
      return <Spinner size="small"/>
    }
    else{
      return(
        <Button onPress={this.onButtonPress.bind(this)}>
            Log In
          </Button>
      )
    }
  }

  onLoginSuccess(){
    this.setState({
      email:'',
      password:'',
      loading:false,
      error:''
    });
  };

  onLoginFail(){
    this.setState({error:'Aunthentication Failed.', loading:false});
  }

  render() {
    return(
            <Card>
        <CardSection>
          <Input
          placeholder='abc@gmail.com'
          label='Email'
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
        <Input
          secureTextEntry={true}
          placeholder='password'
          label='Password'
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>
        {this.state.error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
      )
    
  }
}

const styles={
  errorTextStyle:{
    color:'red',
    alignSelf:'center',
    fontSize:20
  }
}
export default LoginForm;