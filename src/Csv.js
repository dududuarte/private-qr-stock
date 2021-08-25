import React from 'react';
import { StyleSheet, View, TextInput, Alert, TouchableOpacity, Text } from 'react-native';
import { db } from './constants/ApiKeys';
import { toImport } from './constants/json';

export default class Manual extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TextInputValue: ''
    }
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: '',
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#00B0FF',
    };
  };

  fetchInfo() {
    if (this.state.TextInputValue == 'dududuarte') {
        toImport.forEach(element => {
          if(!element.Modelo){
            element.Modelo = "";
          }
          if(!element.Desc){
            element.Desc = "";
          }
          if(!element.DataCompra){
            element.DataCompra = "";
          }
          
          if(!element.Tipo){
            element.Tipo = "";
          }
      db.collection("codigos").doc(element.Codigo).set({
            descricao: element.Desc,
            marca: element.Marca,
            modelo: element.Modelo,
            tipo: element.Tipo,
            dataCompra: element.DataCompra,
      })
    });
          alert('Importado');
        }
        else {
          alert('Codigo errado');
        }
    }


  render() {

    const { navigate, state } = this.props.navigation;

    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 45, borderColor: "gray", textAlign: "center", color: "#00FFFF", textTransform: "uppercase"}}
          autoCapitalize="characters"
          // Adding hint in TextInput using Placeholder option.
          placeholder="Enter Code Number"
          //set the value in state.
          onChangeText={TextInputValue => this.setState({ TextInputValue })}
          // Making the Under line Transparent.
          underlineColorAndroid="transparent"
        />
        <View style={[{margin: 15}]}>
        <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.fetchInfo()}
                    >
                        <Text style={{color: '#fff'}}>Import</Text>
                    </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#000',
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
    color: '#00FFFF',
  },
  button: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 40,
    backgroundColor: '#201f1f',
    borderRadius: 20,
}
});