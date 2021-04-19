import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image,} from 'react-native';


export default class WelcomeScreen extends Component {
    render() {
        return (
            <View style={styles.viewContainer}>

                <View>
                    <Text style={styles.title}> RFID </Text>
                </View>
               

            <View>
                <TouchableOpacity style = {styles.button}>
                    <Text style={styles.buttonText}>
                        Add New Sticker
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {this.props.navigation.navigate('ManageScreen')}>
                    <Text style={styles.buttonText}>
                    Manage Existing Stickers
                    </Text>
                </TouchableOpacity>
            </View>
                   
            </View>
        )
    }


}

const styles = StyleSheet.create({

    viewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    title: {
        marginBottom: 100,
    },
    buttonText: {

    },
    button: {
        borderWidth: 5,
        borderColor: 'black',
        backgroundColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },


})