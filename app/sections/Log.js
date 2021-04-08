import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

import {navigate} from '../../rootNavigation';

export class Log extends Component {
    handleNavigation = () => {
        navigate('logDive', null);
    }

    render() {
        return(
            <View style = {styles.container}>
                <Text style = {styles.title}>
                    Log a dive
                </Text>
                <Text style={styles.description}>
                    Log your dive data from a recent dive to view later in your dive history
                </Text>
                <TouchableHighlight
                    onPress = {this.handleNavigation}
                    style = {styles.button}>
                        <Text>Log</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logContainer: {
        marginTop: 10,
        marginBottom: 10,
    },
    title: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC', //light blue
        alignSelf: 'stretch', //Let's button go the full width of flex box
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flex: 1,
        marginBottom: 20,
    },
    description: {
        color: '#ffffff',
        fontSize: 12,
        marginBottom: 10,
    },
})

export default Log;
