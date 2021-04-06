import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text }from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export class LogDive extends React.Component{
    render() {
        return(
            <View style={styles.logDiveContainer}>
                <StatusBar />
                <ScrollView>
                    <Text style={styles.text}>
                        This is the page that will be used to log a past dive
                    </Text>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logDiveContainer: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#ffffff',
    }
})

export default LogDive;
