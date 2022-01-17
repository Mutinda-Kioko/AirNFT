import { StyleSheet, Dimensions } from "react-native";


const styles = StyleSheet.create({
image:{
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  resizeMode: 'cover',
  justifyContent:'center',
  zIndex: 0,
},
title:{
fontSize: 90,
fontWeight:'bold',
color:'white',
width:'70%',
marginLeft: 25,
},
button:{
backgroundColor: '#fff',
width: 200,
height: 40,
marginLeft: 25,
marginTop: 25,
borderRadius: 10,
justifyContent:'center',
alignItems:'center'
},
buttonText: {
fontSize: 16,
fontWeight:'bold',
},
searchbutton: {
    backgroundColor: '#fff',
    height: 55,
    width:Dimensions.get('screen').width - 20,
    borderRadius: 30,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal: 10,
    position:'absolute',
    top:50,
    zIndex: 1,
    elevation: (Platform.OS === 'android') ? 2 : 0

   
},
searchbuttonText:{
    fontSize: 16,
    fontWeight:'bold',
},

});

export default styles;