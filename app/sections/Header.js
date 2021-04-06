import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

export class Header extends React.Component{
    handleNavigation = () => {
        navigate('home', null);
    }

    render(){
        return(
            <View style = {styles.headerContainer}>
                <Text style = {styles.headerText} onPress={this.handleNavigation}>
                    Let's SCUBA Dive
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingTop: 30,
        paddingRight: 10,
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 2,
        alignContent: 'stretch',
        borderBottomWidth: 2,
        borderColor: '#000000', //black 
    },
    headerText: {
        flex: 1,
        textAlign: 'auto',
        color: '#ffffff',
        fontSize: 30,
        fontWeight: 'bold',
        alignContent: 'flex-end'
    },

})