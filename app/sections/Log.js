import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

import {navigate} from '../../rootNavigation';
import LogButton from './LogButton';

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
                <LogButton />
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
    buttonInfo: {
        margin: 10,
        flexDirection: 'row',
        alignContent: 'flex-start',
    },
    buttonAlign: {
        flex: 2,
    },
    buttonText: {
        fontSize: 26,
        justifyContent: 'flex-start',
        marginLeft: 20,
        fontWeight: 'bold',
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
        flex: 4,
        marginBottom: 20,
    },
    description: {
        color: '#ffffff',
        fontSize: 12,
        marginBottom: 10,
    },
})

export default Log;
