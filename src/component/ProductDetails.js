import React from 'react';
import { Text, Image, View, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection'
import Button from './Button';

const ProductDetails = (Props) =>{
   const {ImageStyle,HeaderItemContainerStyle,TextContainerStyle,ImageCoverStyle } = Styles;
    return(
        <Card >
            <CardSection >
            <View style={HeaderItemContainerStyle}>
                <Image style={ImageStyle} source={{uri: Props.item.img}}/>
                <View style={TextContainerStyle}>
                    <Text>{ Props.item.Title }</Text>
                </View>
            </View>
            </CardSection>

            <CardSection>
                <Image style={ImageCoverStyle} source={{uri:Props.item.img}}/>
            </CardSection>

            <CardSection>
                <Button onClickListener={ ()=> {
                    Linking.openURL(Props.item.img);
                    }}  text={'Click me'} />
            </CardSection>

        </Card>
    )
}  
const Styles={
    ImageStyle:{
        width:50,
        height:50,
    },
    HeaderItemContainerStyle:{
        flexDirection:'row'
        
    },
    TextContainerStyle:{
        justifyContent: 'space-around',
        marginLeft:10     
    },
    ImageCoverStyle:{
        height:300,
        width: null
    }
}

export default ProductDetails;
