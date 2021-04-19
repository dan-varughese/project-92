import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Flatlist} from 'react-native';

export default class ManageScreen extends Component {
    constructor() {
        super();
        this.state = {
            stickerName = '',
            stickerId = '',

        }
    }

    renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        const color = item.id === selectedId ? 'white' : 'black';
    }
    renderItem({ item, index, separators });

    keyExtractor = {item, index} => index.toString();


    render() {
        return (
            <View style={{flex:1}}>
                <Text>
                    Manage Stickers
                </Text>
                <Flatlist
                keyExtractor={this.KeyExtractor}>
                renderItem={renderItem}
                style = {styles.flatlist} 
                </Flatlist>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    headings: {
        fontSize: 30,
        fontWeight: 'bold',
        
    },
    flatlist: {
        borderWidth: 10,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 15,
    },

})