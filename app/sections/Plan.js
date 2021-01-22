import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

import {navigate} from '../../rootNavigation';

export class Plan extends React.Component {
    handlePlan = () => {
        navigate('planDive', null);
    }

    render() {
        return(
            <View style = {styles.container}>
                <Text style = {styles.title}>
                    Plan a Dive
                </Text>
                <TouchableHighlight
                    onPress = {this.handlePlan}
                    style = {styles.button}>
                        <Text>Button</Text>
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

export default Plan;