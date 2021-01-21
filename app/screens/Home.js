import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export class Home extends React.Component{
    render(){
        return(
            <View style={styles.homeContainer}>
                <Text style={styles.tempText}>
                    This is the home page
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    homeContainer:{
        backgroundColor: '#000000',
    },
    tempText:{
        color: '#ffffff',
    },
})

export default Home;