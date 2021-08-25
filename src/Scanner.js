import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, Alert, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { db } from './constants/ApiKeys';
import { Ionicons } from '@expo/vector-icons'; 

export default class Scanner extends React.Component {
  constructor(){
    super();
    this.state = {
      hasCameraPermission: null, // if app has permissions to acess camera
      isScanned: false, // scanned
      flash: 'off',
      icon: 'ios-flash-off'
    };
  }
  static navigationOptions = {
    headerShown: false,
  }
  
  state = {
    hasCameraPermission: null, // if app has permissions to acess camera
    isScanned: false, // scanned
    flash: 'off',
    icon: 'ios-flash-off'
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" ? true : false });
  }

  reDo = () => {
    this.setState({isScanned: false});
  }
  
  handleBarCodeScanned = ({ type, data }) => {
    this.setState({isScanned: true});
    if (data !== '' && data !== null) {
      var re = /^([a-zA-Z0-9-,.!? ]*)$/;
      if(re.test(data)){
      let docRef = db.collection('codigos').doc(data);
      docRef.get().then( doc => {
        if(doc.exists){
          descricao = doc.data().descricao;
          tipo = doc.data().tipo;
          marca = doc.data().marca;
          modelo = doc.data().modelo;
          dataCompra = doc.data().dataCompra;
          //Alert.alert('Found', `Bar code: ${data} \nName: ${name} \nOwner: ${owner}\nDescription: ${desc}\nPrice: ${price}\nDate of Purchase: ${date}`, [{ text: 'OK', onPress: this.reDo }]);
          Alert.alert('Found', `Codigo Lido: ${data} \n\nTipo: ${tipo} \nMarca: ${marca}\nModelo: ${modelo}\nDescricao: ${descricao}\nData de Compra: ${dataCompra}`, [{ text: 'OK', onPress: this.reDo }]);
        }
        else {
          Alert.alert('Not Found', `Codigo Lido: ${data}`, [{ text: 'OK', onPress: this.reDo }]);
        }
      });
    }
    }
 }

  _handleFlash = () => {
    const { flash, icon } = this.state;
    if (flash === 'torch') {
        this.setState({ flash: 'off' });
        this.setState({icon: "ios-flash-off"});
    } else {
        this.setState({ flash: 'torch' });
        this.setState({icon: "ios-flash"});
    }
}

render() {
    const { hasCameraPermission, isScanned, icon, flash } = this.state;
    if(hasCameraPermission === null){
      return (
        <Text>Requesting for camera permission</Text> 
      );
    }
    else if(hasCameraPermission === false){
      return ( 
        <Text>No access to camera</Text>
      )
    }
    else if(hasCameraPermission === true){
      return(
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
        <Camera
        onBarCodeScanned={ isScanned ? undefined : this.handleBarCodeScanned}
        style={[StyleSheet.absoluteFillObject, styles.container]}
        flashMode={flash}
        >
        <Text style={styles.description}>Scan QR Code</Text>
        <Ionicons name={icon} color='white' size={27} onPress={this._handleFlash} style={{paddingTop: '10%',textAlign: 'center',backgroundColor: opacity}}>
        </Ionicons>
        <View style={styles.layerTop} />
        <View style={styles.layerCenter}>
          <View style={styles.layerLeft} />
          <View style={styles.focused} />
          <View style={styles.layerRight} />
        </View>
        <View style={styles.layerBottom}>
        <Text
          onPress={() => this.props.navigation.goBack() }
          style={styles.cancel}>
          Cancel
        </Text>
        </View>
      </Camera>
    </View>
  );
}
}
}
const { width } = Dimensions.get('window')
const opacity = 'rgba(0, 0, 0, .5)';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  layerTop: {
    flex: 1,
    backgroundColor: opacity
  },
  layerCenter: {
    flex: 2,
    flexDirection: 'row'
  },
  layerLeft: {
    flex: 1,
    backgroundColor: opacity
  },
  focused: {
    flex: 13
  },
  layerRight: {
    flex: 1,
    backgroundColor: opacity
  },
  layerBottom: {
    flex: 3,
    backgroundColor: opacity
  },
  description: {
    fontSize: width * 0.09,
    paddingTop: '25%',
    textAlign: 'center',
    color: 'white',
    backgroundColor: opacity
  },
  cancel: {
    fontSize: width * 0.05,
    textAlign: 'center',
    color: 'white',
    marginTop: '20%',
  }
});