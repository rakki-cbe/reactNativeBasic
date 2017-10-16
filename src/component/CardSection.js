import React from 'react';
import {View} from 'react-native';

const CardSection = (Props) =>{
    return (<View style={styles.CardSection}>{Props.children}</View>)
}

const styles = {
    CardSection:{
        marginLeft:5,
        marginRight:5,
        marginBottom:5,
        marginTop:5,
        backgroundColor:'#FFDDFF'
    }
}
export default CardSection;
