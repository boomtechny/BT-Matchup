import { Dimensions, Platform } from 'react-native';
import { moderateScale as normalize } from 'react-native-size-matters';

const color = {
  secondary: "#4C0E00",
  black: "1A0600",
  secondaryDark: "4D2612", 
  secondarylight: "7B1900"
  primary:"F36E21"
  primarylight: "F3925A", 
  white: "EDCBB6",
}


const fontSize = {
  small: normalize(12),
  regular: normalize(14),
  large: normalize(21)
}

const fontFamily = {
   h1: "Chivo-Bold",
  h2: "Chivo-Regular",
  body: "Roboto-Black",
}

const padding = 8;
const navbarHeight = (Platform.OS === 'ios') ? 64 : 54;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const tabColor = (Platform.OS === "ios") ? "rgba(73,75,76, .5)" : "rgba(255,255,255,.8)";
const selectedTabColor = (Platform.OS === "ios") ? "rgb(73,75,76)" : "#fff";

const tabIconStyle = { size: 21, color: tabColor, selected: selectedTabColor }
const navTitleStyle = { fontSize: fontSize.regular , fontFamily: fontFamily.extrabold, color: color.black }

export {
    color,
    fontSize,
    fontFamily,
    padding,
    navbarHeight,
    windowWidth,
    windowHeight,
    tabIconStyle,
    navTitleStyle,
    normalize} 