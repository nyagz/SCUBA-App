import { AntDesign } from '@expo/vector-icons';
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';

import { navigate } from '../../rootNavigation';

export class LogButton extends Component {
    handleNavigation = () => {
        navigate('logDive', null);
    }

    render() {
        return (
            <View>
                <TouchableHighlight
                onPress = {this.handleNavigation}
                style={styles.button}>
                    <View style={styles.buttonInfo}>
                        <AntDesign name="pluscircleo" size={30} color="black" />
                        <Text style={styles.buttonText}>Log</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC', //light blue
        alignSelf: 'stretch', //Let's button go the full width of flex box
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flex: 4,
        marginBottom: 20,
    },
    buttonInfo: {
        margin: 10,
        flexDirection: 'row',
        alignContent: 'flex-start',
    },
    buttonText: {
        fontSize: 26,
        justifyContent: 'flex-start',
        marginLeft: 20,
        fontWeight: 'bold',
    },
})

export default LogButton;
