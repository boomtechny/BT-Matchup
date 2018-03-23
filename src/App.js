import React, {Component} from 'react'; 
import { View, Text, Image } from 'react-native'; 
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from './components/common/Icon';

class App extends Component{
  render(){
    return(
    <LinearGradient colors ={['#4C0E00', '#1A0600']} style={styles.container }  >
    <View  >
    <Image style = {styles.logo} source = {require('./resources/icons/logo.png')}/>

<Text style= {{color:'white', fontSize:24}} >Welcome</Text>


    </View>
</LinearGradient>
  ); 
}
}
const styles = {
  container:{
    
    flex: 1, 
    alignItems:'center', 
    justifyContent: 'center'
  },
  logo:{
    width:75,
    height:75
  }
}
export default App; 