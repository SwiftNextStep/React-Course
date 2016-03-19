//Imports
import React,{
  AppRegistry,
  Component,
  View,
  Text,
  StyleSheet
} from 'react-native';

//Create component
class HelloWorld extends Component{
  render(){
    return(
      <View style = {styles.view}>
        <Text style = {styles.title}>
          Hello World
        </Text>
      </View>
    );
  }
}

//StyleSheets
const styles = StyleSheet.create({
  view:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#995555',
  },
  title:{
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  }
})

//Register the component
AppRegistry.registerComponent('HelloWorld',function (){
  return HelloWorld
});
