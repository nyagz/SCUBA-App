import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text, Modal } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Header } from '../sections/Header';

import PlanModal from '../sections/PlanModal';
import PlanInfo from '../sections/PlanInfo';
import Footer from '../sections/Footer';

export class PlanDive extends React.Component{
    render() {
        return(
            <View style = {styles.planDiveContainer}>
                <StatusBar style="inverted" />
                <Header />
                <View style={styles.noHeader}>
                    <ScrollView>
                        <PlanModal />
                        <Text style={styles.miniHeader}>
                            Ready to dive!
                        </Text>
                        <PlanInfo />
                    </ScrollView>
                    <Footer />
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