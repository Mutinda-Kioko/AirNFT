import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
container: {
    height:120,
    padding: 5,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 8,
},
shadowOpacity: 0.44,
shadowRadius: 10.32,

elevation: 16,
},
innerContainer:{
    flexDirection:'row',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow:'hidden',
},
image:{
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
},
prices:{
fontSize: 14,
marginVertical: 10,
},
oldPrice:{
    color:'#5b5b5b',
    textDecorationLine: 'line-through',
    
},
newPrice: {
    fontWeight:'bold',
},
totalPrice:{
    color:'#5b5b5b',
    textDecorationLine: 'underline',
    
},
description:{
    fontSize: 14,


},
bedroom:{
  marginVertical: 10,
  color:'#5b5b5b'
}
});

export default styles;