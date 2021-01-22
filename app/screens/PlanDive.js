import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export class PlanDive extends React.Component{
    render() {
        return(
            <View style = {styles.planDiveContainer}>
                <ScrollView>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#ffffff',
    },
})

export default PlanDive;