import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

export class Header extends React.Component{
    render(){
        return(
            <View style = {styles.headerContainer}>
                <Text style = {styles.headerText}>
                    Let's SCUBA Dive
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        alignContent: 'center',
        flex: 1,
        backgroundColor: '#000000',
        paddingTop: 50,
    },
    headerText: {
        flex: 1,
        textAlign: 'right',
        color: '#ffffff',
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems:'center',
        justifyContent: 'center',
    },

})