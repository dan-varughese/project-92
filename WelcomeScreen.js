import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.viewContainer}>
            <View>
                <Text style={styles.title}>RFID</Text>
            </View>

            <View>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('AddScreen')}
                >
                    <Text style={styles.buttonText}>
                        Add New Sticker
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('ManageScreen')}
                >
                    <Text style={styles.buttonText}>
                        Manage Existing Stickers
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    title: {
        marginBottom: 100,
        fontSize: 36,
        fontWeight: 'bold',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    button: {
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'gray',
        borderRadius: 10,
        padding: 15,
        marginTop: 20,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default WelcomeScreen;
