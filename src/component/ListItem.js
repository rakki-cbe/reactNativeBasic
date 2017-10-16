//Imports
import React, { Component } from 'react';
import {ScrollView} from 'react-native';
import api from 'axios';
import ItemDetails from './ProductDetails';
//Component creation

class ListItem extends Component {
state={ items: [] };
componentWillMount() {
    api.get('http://www.mocky.io/v2/59e06e090f00008d01effb4c')
    .then(response => this.setState({ items: response.data }));
}

 rederLists() {
     console.log(this.state);
    return this.state.items.map(item => <ItemDetails key={item.Id} item={item} />);
 } 

render() {
   return <ScrollView>{this.rederLists()}</ScrollView>;
}
}
//Export 

export default ListItem;
