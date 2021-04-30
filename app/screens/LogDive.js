import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text }from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Header } from '../sections/Header';
import { Inout, Input } from 'galio-framework';
import LogModal from '../sections/LogModal';

export class LogDive extends React.Component{
    render() {
        return(
            <View style={styles.logDiveContainer}>
                <StatusBar style="inverted" />
                <ScrollView>
                    <Header />
                    <LogModal />
                    <Text style={styles.miniHeader}>
                        Hope you enjoyed your dive!
                    </Text>
                    <Text style={styles.text}>
                        Now log it so that you can see it later in your history
                    </Text>
                    <View style={styles.logStyle}>
                        <Input 
                            placeholder="Name your dive..."
                        />
                    </View>

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
})

export default LogDive;
