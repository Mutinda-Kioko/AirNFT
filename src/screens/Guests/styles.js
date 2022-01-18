import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    row: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal: 20,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
    },
    adult: {},
    title: {
        fontWeight:'bold',

    },
    titleText: {
        color:'#7b7b7b'
    },
    buttons: {
        flexDirection:'row',
        alignItems:'center',

    },
    button: {
        borderWidth:1,
        width: 30,
        height: 30 ,
        borderRadius:15,
        borderColor: '#676767',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 17,
        marginHorizontal: 20,
    },
    textButton: {
        fontSize:20,
        color: '#474747',
    },
});

export default styles;