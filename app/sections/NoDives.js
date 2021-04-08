import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class NoDives extends Component {
    render() {
        return (
            <View style={styles.noDiveContainer}>
                <Text style={styles.noDiveText}>
                    You haven't logged any dives... yet!
                </Text>
                <Text style={styles.noDiveDescription}>
                    No worries, you can add any past dives here
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    noDiveContainer: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
    },
    noDiveText: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    noDiveDescription: {
        marginTop: 10,
        color: '#ffffff',
        fontSize: 12,
        textAlign: 'left',
    },
})

export default NoDives;
