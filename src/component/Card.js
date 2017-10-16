import React from 'react';
import { View } from 'react-native';

const Card = (Props) => <View style={ Styles.Card } >{Props.children}</View> ;

const Styles = {
    Card: {
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    }
};

export default Card;
    