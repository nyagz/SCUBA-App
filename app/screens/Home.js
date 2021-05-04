import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Header } from '../sections/Header';
import Plan from '../sections/Plan';
import Log from '../sections/Log';
import History from '../sections/History';

export class Home extends React.Component{
    render(){
        return(
            <View style={styles.homeContainer}>
                <StatusBar style="inverted" />
                <Header />
                <View style={styles.menu}>
                    <ScrollView>
                        <Text style={styles.text}>
                            Welcome to Let's SCUBA Dive. An app for all you of your SCUBA diving needs!
                        </Text>
                        <Plan />
                        <Log />
                        <History />
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    homeContainer:{
        flex: 15,
        backgroundColor: '#000000',
        alignItems: 'stretch',
    },
    tempText:{
        flex: 1,
        color: '#ffffff',
    },
    menu: {
        flex: 14,
        alignItems: 'stretch',
    },
    text: {
        color: '#ffffff'
    }
})

export default Home;