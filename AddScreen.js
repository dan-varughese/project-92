import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import RNPrint from 'react-native-print';

export default class AddScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stickerId: '',
            stickerName: '',
            hasCameraPermissions: null,
            scanned: false,
            scannedData: '',
            buttonState: 'normal',
            selectedPrinter: null,
        };
    }

    getCameraPermissions = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermissions: status === 'granted',
            buttonState: status === 'granted' ? 'clicked' : 'normal'
        });
    }

    handleBarCodeScanned = ({ type, data }) => {
        this.setState({
            scanned: true,
            scannedData: data,
            buttonState: 'normal'
        });
    }

    selectPrinter = async () => {
        try {
            const selectedPrinter = await RNPrint.selectPrinter({ x: 100, y: 100 });
            this.setState({ selectedPrinter });
        } catch (error) {
            console.error('Error selecting printer:', error);
        }
    }

    printSticker = async () => {
        if (!this.state.selectedPrinter) {
            alert('Must Select Printer First');
            return;
        }
        try {
            //not implemented 
            console.log('Printing...');
        } catch (error) {
            console.error('Error printing:', error);
        }
    }

    render() {
        const { hasCameraPermissions, scanned, buttonState, scannedData } = this.state;

        if (buttonState === 'clicked' && hasCameraPermissions) {
            return (
                <View style={styles.container}>
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
                        style={StyleSheet.absoluteFillObject}
                    />
                    {scanned && (
                        <TouchableOpacity style={styles.button} onPress={() => this.setState({ scanned: false })}>
                            <Text style={styles.buttonText}>Tap to Scan Again</Text>
                        </TouchableOpacity>
                    )}
                </View>
            );
        }

        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {hasCameraPermissions === null
                        ? 'Requesting camera permission'
                        : hasCameraPermissions
                        ? scannedData
                            ? `Scanned Data: ${scannedData}`
                            : 'No data scanned'
                        : 'Please allow camera permissions'}
                </Text>

                <TouchableOpacity style={styles.button} onPress={this.getCameraPermissions}>
                    <Text style={styles.buttonText}>Scan Barcode</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={this.selectPrinter}>
                    <Text style={styles.buttonText}>Select Printer</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={this.printSticker}>
                    <Text style={styles.buttonText}>Print Sticker</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        margin: 10,
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});
