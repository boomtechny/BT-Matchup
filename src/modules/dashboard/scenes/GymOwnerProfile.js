import React, {Component} from 'react'; 
import { View, Text, Image } from 'react-native'; 
import LinearGradient from 'react-native-linear-gradient';




class GymOwnerProfile extends Component{
  render(){
    return(
    <LinearGradient colors ={['#4C0E00', '#1A0600']} style={styles.container }  >
    <View  >
    <Image style = {styles.logo} source = {require('../../../resources/icons/logo.png')}/>

<Text style= {{color:'#F3925A', fontSize:24, fontFamily:'Chivo-Bold'}} >Gym Owner Profile</Text>


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
    width:125,
    height:125,
  
  }
}
export default GymOwnerProfile; 