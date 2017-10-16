import React from 'react';
import {TouchableOpacity, Text } from 'react-native';

const Button =(Props)=>{
    const { TouchableOpacityStyle,TextStyle}=Styles;
    return (
        <TouchableOpacity onPress={Props.onClickListener} style={TouchableOpacityStyle} >
            <Text style={TextStyle}>
                {Props.text}
            </Text>
        </TouchableOpacity>
    )
    
}

const Styles={
    TouchableOpacityStyle:{
        flex:1,
        alignSelf:'stretch',
        borderColor:'#007aff',
        backgroundColor:'#fff',
        borderWidth:1,
        borderRadius:5,
        marginLeft:5,
        marginRight:5,
    },
    TextStyle:{
        alignSelf:'center',
        paddingTop:5,
        paddingBottom:5,
        fontSize:16,
        fontWeight:'600',
        color:'#007aff'
    }
}
export default Button;