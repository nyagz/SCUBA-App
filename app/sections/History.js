import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {navigate} from '../../rootNavigation';

export class History extends Component {
    handleNavigation = () => {
        navigate('history', null);
    }

    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.title}>
                    View Dive History
                </Text>
                <Text style={styles.description}>
                    View the history of all of your past logged dives.
                </Text>
                <TouchableHighlight
                    onPress = {this.handleNavigation}
                    style = {styles.button}>
                        <View style={styles.buttonInfo}>
                            <MaterialCommunityIcons name="history" size={34} color="black" />
                            <Text style={styles.buttonText}>History</Text>
                        </View>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
    },
    title: {
        alignSelf: 'flex-start',
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
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flex: 1,
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
    description: {
        color: '#ffffff',
        fontSize: 12,
        marginBottom: 10,
    },
})

export default History;
