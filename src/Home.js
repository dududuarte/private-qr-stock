import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

/**
 * Home screen
 */
export default class Home extends React.Component {

    static navigationOptions = {
        headerShown: false,
    };

    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <View style={[{ width: "40%", margin: 30 }]}>
                    <Image
                        source={require('../assets/icon.png')}
                        style={{ borderRadius: 20 }} />
                </View>
                <View style={[{ width: "40%", margin: 15 }]}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigate('Scanner')}
                    >
                        <Text style={{color: '#fff'}}>Camera</Text>
                    </TouchableOpacity>
                </View>

                <View style={[{ width: "40%", margin: 15 }]}>
                <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigate('Manual')}
                    >
                        <Text style={{color: '#fff'}}>Manual</Text>
                    </TouchableOpacity>
                </View>

                <View style={[{ width: "40%", margin: 15 }]}>
                <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigate('Csv')}
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    button: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.6)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 40,
        backgroundColor: '#201f1f',
        borderRadius: 20,
    }
});