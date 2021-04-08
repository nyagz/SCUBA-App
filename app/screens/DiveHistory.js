import React, { Component } from 'react'
import { StyleSheet, Text, TouchableHighlightComponent, View } from 'react-native'
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

import {navigate} from '../../rootNavigation';
import NoDives from '../sections/NoDives';
import { Header } from '../sections/Header';
import { StatusBar } from 'expo-status-bar';

// Examples for how to use the tables found here:
// https://www.npmjs.com/package/react-native-table-component

export class DiveHistory extends Component {
    constructor(props){
        super(props);
        this.state = {
            tableHead: ['Dive Number', 'Head'],
            tableTitle: ['1', '2'],
            tableData:[
                ['Some dive data'],
                ['Some dive data']
            ]
        }
    }

    handleNavigation = () => {
        navigate('planDive', null);
    }

    render() {
        const state = this.state;
        return (
            <View style={styles.historyContainer}>
                <StatusBar style="inverted" />
                <ScrollView>
                    <Header />
                    <Text style={styles.text}>
                        If diver has not logged any dives before
                    </Text>
                    <NoDives />
                    <Text style={styles.text}>Attempting to use a table</Text>
                    <Table borderStyle={{borderWidth: 3, borderColor: '#ffffff'}}>
                        <Row data={state.tableHead} textStyle={styles.tableHeadText} />
                        <TableWrapper style={styles.wrapper}>
                            <Col data={state.tableTitle} style={styles.tableTitle} heightArr={[28, 28]} textStyle={styles.tableTitleText}/>
                            <Rows data={state.tableData} flexArr={[2, 1, 1]} style={styles.tableText} textStyle={styles.tableText} />
                        </TableWrapper>
                    </Table>
                    <Text style={styles.text}>Adding a new dive will go here</Text>
                    <TouchableHighlight
                        onPress = {this.handleNavigation}
                        style = {styles.button}>
                            <Text>Add a dive log</Text>
                    </TouchableHighlight>
                    <Text style={styles.text}> This page will show all past dive history </Text>
                    <Text style={styles.text}> It should also show the total number of dives saved</Text>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    historyContainer: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
    text: {
        color: '#ffffff',
    },
    tableHead: {
        height: 40,
        backgroundColor: '#000000',
    },
    tableHeadText: {
        margin: 6,
        color: '#ffffff',
        alignItems: 'center',
        fontWeight: 'bold',
    },
    tableText: {
        margin: 6,
        color: '#ffffff',
        textAlign: 'center',
    },
    wrapper: {
        flexDirection: 'row',
    },
    tableTitle: {

    },
    tableTitleText: {
        textAlign: 'center',
        color: '#ffffff',
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC', //light blue
        alignSelf: 'stretch', //Let's button go the full width of flex box
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flex: 1,
        marginBottom: 20,
    },
    noDivesText: {
        color: '#ffffff',
        textAlign: 'center',
    }
})

export default DiveHistory;
