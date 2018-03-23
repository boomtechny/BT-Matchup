import React, {Component} from 'react'; 
import { View, Image } from 'react-native'; 

const Icon = (props) =>{
return (
  <View> 
    <Image style = {[styles.imageStyle, props.style]} source ={imagesrc}/>
    </View>
);
}; 

const styles={
  imageStyle:{
    width:100, 
    height:100
  }
}

export { Icon };