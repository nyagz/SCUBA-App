import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Header } from '../sections/Header';

export class PlanDive extends React.Component{
    render() {
        return(
            <View style = {styles.planDiveContainer}>
                <StatusBar style="auto" />
                <ScrollView>
                    <Header />
                    <Text style = {styles.text}>
                        This is the page that will be used to plan a dive
                    </Text>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    planDiveContainer: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
    text: {
        color: '#ffffff',
    },
})

export default PlanDive;