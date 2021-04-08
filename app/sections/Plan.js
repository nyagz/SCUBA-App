import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

import {navigate} from '../../rootNavigation';
import PlanButton from './PlanButton';

export class Plan extends React.Component {
    handleNavigation = () => {
        navigate('planDive', null);
    }

    render() {
        return(
            <View style = {styles.container}>
                <Text style = {styles.title}>
                    Plan a Dive
                </Text>
                <Text style={styles.description}>
                    Plan an upcomming dive based on depth and time of dive. Will receive a log of decompression stops to take while ascending
                </Text>
                <PlanButton />
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

export default Plan;