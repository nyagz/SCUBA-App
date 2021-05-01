import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text }from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Header } from '../sections/Header';
import {Input } from 'galio-framework';
import LogModal from '../sections/LogModal';
import LogInfo from '../sections/LogInfo';

export class LogDive extends React.Component{
    render() {
        return(
            <View style={styles.logDiveContainer}>
                <StatusBar style="inverted" />
                <Header />
                <ScrollView>
                    <LogModal />
                    <Text style={styles.miniHeader}>
                        Hope you enjoyed your dive!
                    </Text>
                    <Text style={styles.text}>
                        Now log it so that you can see it later in your history
                    </Text>
                    <LogInfo />
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
    formContainer:{
        flex: 1,
    },
    miniHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        color: '#ffffff',
    },
    text: {
        color: '#ffffff',
    },
    logInfo: {
        justifyContent: 'center',
        alignContent: 'stretch',
    },
    formTitle: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
})

export default LogDive;
