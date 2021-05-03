import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Header } from '../sections/Header';

export class PlannedDive extends Component {
    render() {
        return (
            <View style={styles.plannedDiveContainer}>
                <Header />
                <Text style={styles.infoText}></Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    plannedDiveContainer: {
        flex: 15,
        backgroundColor: '#000000',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
})
export default PlannedDive;
