import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Flatlist, Inputbox, Icon} from 'react-native';
import * as permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';
import RNPrint from 'react-native-print';


export default class AddScreen extends Component {
    constructor() {
        super();
        this.state = {  
            stickerId: '',
            stickerName: '',
            hasCameraPermissions: null,
            scanned: false,
            scannedData: '',
            buttonState: 'normal',
            
        }
    }

    getCameraPermissions=async()=> {
        const{status} = await Permissions.askAsync(Perimssion.CAMERA)
        this.setState({
            hasCameraPermissions: status === 'granted'
        })
        
    }
    
    handleBarcodeScanner=async({type,Data})=> {
        this.setState({
            scanned : true,
            scannedData:Data,
            buttonState:normal
        })
    }
    
    render() {
        const hasCameraPermissions = this.state.hasCameraPermissions;
        const scanned = this.state.scanned;
        var buttonState = this.state.buttonState;
      
        if(buttonState === 'clicked' && hasCameraPermissions) {
                return(
                    <BarCodeScanner 
                    onBarcodeScanned={scanned?undefined:this.handleBarcodeScanner}
                    style = {styleSheet.absoluteFillObject}/>
                    
                    );
               
                }
           
        else if(buttonState === 'normal') {
            return(
                <View>
                    <Text>
                     {hasCameraPermissions===true?this.state.ScannedData:"Please allow camera permissions"}
                    </Text>

                <TouchableOpacity onPress = {this.getCameraPermissions}>
                    <Image source={require('./assets/camera.png')}
                    style = {{width: 40, height: 40}}>

                    </Image>
                </TouchableOpacity>

                <TouchableOpacity onPress = {this.printSticker}>
                    <Text>
                        Print
                    </Text>
                </TouchableOpacity>
                </View>
            )
        }  
        printSticker=async()=> {
            selectPrinter = async () => {
                const selectedPrinter = await RNPrint.selectPrinter({ x: 100, y: 100 })
                this.setState({ selectedPrinter })
              }
              silentPrint = async () => {
                if (!this.state.selectedPrinter) {
                  alert('Must Select Printer First')
                }
        }
        }        
    }
}

