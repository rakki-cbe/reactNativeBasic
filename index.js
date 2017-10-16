//Import 
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/component/Header';
import ListItem from './src/component/ListItem';

//Creating Component 
const App = () => {
    console.log('success');
   return (
        <View style={{flex:1}}>
            <Header Text={'Welcome'} />
            <ListItem />
            </View>
    );
};

//Registering my component
AppRegistry.registerComponent('AwesomeProject', () => App);
