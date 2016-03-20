//Imports
import React,{
  AppRegistry,
  Component,
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native'

// Create a subcompnent
class Response extends Component{
  render(){
    if (!this.props.message){
      return(
        <Text>
          Hello I don&#39;t know your name yet
        </Text>
      )
    } else {
      return(
        <Text>
          Hello {this.props.message}
        </Text>
      ) 
    }
  }
}
//Create Component

class Polite extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
    };
  }
  _newMessage(event){
      console.log(event)
  }
  render(){
    return(
      <View style = {styles.view}>
        <Text style = {styles.title}>
          Hi, what is your name?
        </Text>
        <TextInput style = {{height:40, borderColor:'black', borderWidth:3,
        margin:10}} placeholder = 'Enter your name'
        onChangeText = {(username)=>this.setState({username})}
        value={this.state.username}
        />
        <Response message = {this.state.username}/>
      </View>
    );
  }
}

//StyleSheet
const styles = StyleSheet.create({
  view:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title:{
    fontSize: 20,
    textAlign: 'center'
  }
})

//Register the Component
AppRegistry.registerComponent('Polite', () => Polite)
