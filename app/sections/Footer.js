import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import {navigate} from '../../rootNavigation';

export class Footer extends React.Component{
    handleNavigation = () => {
        navigate('home', null);
    }

    render(){
        return(
            <View style = {styles.headerContainer}>
                <View style={styles.noMenu}>
                    <Text style = {styles.headerText} >
                           
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingTop: 40,
        paddingRight: 10,
        flexDirection: 'row',
        borderBottomWidth: 2,
        alignContent: 'stretch',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderColor: '#000000', //black 
    },
    headerText: {
        flex: 1,
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 30,
        fontWeight: 'bold',
        alignContent: 'flex-end'
    },
    noMenu: {
        flex: 3,
        flexDirection: 'row',
        alignContent: 'stretch',
        alignItems: 'center',
    },
})

export default Footer;