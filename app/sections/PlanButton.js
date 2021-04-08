import React, { Component } from 'react'
import { StyleSheet, Text, Touchable, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native-gesture-handler';

import {navigate} from '../../rootNavigation';

export class PlanButton extends Component {
    handleNavigation = () => {
        navigate('planDive', null);
    }

    render() {
        return (
            <View>
                <TouchableHighlight
                    onPress={this.handleNavigation}
                    style = {styles.button}>
                    <View style={styles.buttonInfo}>
                        <AntDesign name="bars" size={30} color="black" />
                        <Text style={styles.buttonText}>Plan</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC', //light blue
        alignSelf: 'stretch', //Let's button go the full width of flex box
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flex: 1,
        marginBottom: 20,
    },
    buttonInfo: {
        margin: 10,
        flexDirection: 'row',
        alignContent: 'flex-start',
    },
    buttonText: {
        fontSize: 26,
        justifyContent: 'flex-start',
        marginLeft: 20,
        fontWeight: 'bold',
    },
})
export default PlanButton;
