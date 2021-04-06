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
                    Plan a Dive (Add some kind of image)
                </Text>
                <TouchableHighlight
                    onPress = {this.handleNavigation}
                    style = {styles.button}>
                        <Text>Button (Add some kind of image) </Text>
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
})

export default Log;
