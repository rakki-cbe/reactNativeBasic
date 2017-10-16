//Import library 
import React from 'react';
import { Text, View } from 'react-native';


//Creating component
const Header = (props) => {
    const { TextStyle, ViewStyle } = Style;
      
return (
    
    <View style={ViewStyle}>
        <Text style={TextStyle} >{props.Text} </Text>
    </View>
);
};

//Styling it 
const Style = {
    ViewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
        
    },
    TextStyle: {
        fontSize: 20
       
        
    }
};
//Exporting componenet to others 

export default Header;
