import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Header } from '../sections/Header';
import Plan from '../sections/Plan';

export class Home extends React.Component{
    render(){
        return(
            <View style={styles.homeContainer}>
                <StatusBar style="auto" />
               <ScrollView>
                    <Header />
                    <Text style={styles.tempText}>
                        This is the home page
                    </Text>
                    <Plan />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    homeContainer:{
        flex: 3,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tempText:{
        flex: 1,
        color: '#ffffff',
    },
})

export default Home;