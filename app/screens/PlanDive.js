import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Header } from '../sections/Header';

// TODO: Work on next
// Add vector images

export class PlanDive extends React.Component{
    render() {
        return(
            <View style = {styles.planDiveContainer}>
                <StatusBar style="inverted" />
                <Header />
                <View style={styles.noHeader}>
                    <ScrollView>
                        <Text style={styles.miniHeader}>
                            Ready to dive!
                        </Text>
                        <Text style = {styles.text}>
                            Dive's are planned using ..........
                        </Text>
                        <Text style={styles.text}>
                            The dives are planned based on your gas used, the maximum depth of your dive & the planned length of the dive
                        </Text>
                        <Text style={styles.text}>
                            Gas used
                        </Text>
                        <Text style={styles.text}>
                            Max depth
                        </Text>
                        <Text style={styles.text}>
                            Total time
                        </Text>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    planDiveContainer: {
        flex: 15,
        backgroundColor: '#000000',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
    miniHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        color: '#ffffff',
    },
    noHeader: {
        flex: 14,
    },
    text: {
        marginTop:20,
        color: '#ffffff',
    },
})

export default PlanDive;