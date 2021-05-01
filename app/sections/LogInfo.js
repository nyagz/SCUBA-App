import React, { Component, useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import {Input } from 'galio-framework';
import DateTimePicker from '@react-native-community/datetimepicker';
import Autcomplete from 'react-native-autocomplete-input';
import { ScrollView } from 'react-native-gesture-handler';
import Autocomplete from 'react-native-autocomplete-input';

// TODO: Make countries auto complete
export class LogInfo extends Component {
    constructor(props){
        super(props);

        this.state = {diveNumber: Number};
        this.setDiveNumber = this.setDiveNumber.bind(this);

        this.state = {name: ''};
        this.setName = this.setName.bind(this);

        this.state = {country: ''};
        this.setCountry = this.setCountry.bind(this);

        this.state = {location: ''};
        this.setLocation = this.setLocation.bind(this);

        this.state = {chosenDate: new Date()};
        this.setDate = this.setDate.bind(this);

        this.state = {timeIn: new Date()};
        this.setTimeIn = this.setTimeIn.bind(this);
    }

    setDiveNumber(newDiveNumber){
        this.setState({diveNumber: newDiveNumber});
    }

    setDate(newDate){
        this.setState({chosenDate: new Date(newDate)});
    }

    setTimeIn(newTimeIn){
        this.setState({timeIn: new Date(newTimeIn)})
    }

    setName(newName){
        this.setState({name: newName});
    }

    //TODO: Fix?
    setCountry(newCountry){
        this.setState({country: newCountry});
    }

    setLocation(newLocation){
        this.setState({location: newLocation});
    }

    render() {
        return (
            <View style={styles.logInfoContainer}>
                <Text style={styles.infoTitle}>
                    Dive number:
                </Text>
                <View style={styles.logStyle}>
                    <Input 
                        placeholder="Name your dive..."
                        keyboardType="numeric"
                        onChangeText={this.setDiveNumber}
                    />
                </View>
                <Text style={styles.infoTitle}>
                    Dive name:
                </Text>
                <View style={styles.logStyle}>
                    <Input 
                        placeholder="Name your dive..."
                        onChangeText={this.setName}
                />
                </View>
                <Text style={styles.infoTitle}>
                    Date:
                </Text>
                <DateTimePicker 
                    value={new Date}
                    maximumDate={new Date}
                    mode='date'
                    display='default'
                    onChange={(event, selectedDate) => {
                        this.setDate(new Date(selectedDate));
                    }}
                />
                <Text style={styles.infoTitle}>
                    Country:
                </Text>
                <Input 
                    placeholder="Country"
                    onChangeText={(text) => findCountry(text)}
                />
                <Text style={styles.infoTitle}>
                    Location:
                </Text>
                <Input 
                    placeholder="Dive location..."
                    onChangeText={this.setLocation}
                />
                <View style={styles.times}>
                    <View style={styles.time}>
                        <Text style={styles.infoTitle}>
                            Time in:
                        </Text>
                        <DateTimePicker
                            value={this.state.timeIn}
                            mode="time"
                            display="default"
                            is24Hour={true}
                            maximumDate={new Date}
                        />
                    </View>
                    <View style={styles.time}>
                        <Text style={styles.infoTitle}>
                            Time Out:
                        </Text>
                        <DateTimePicker
                            value={this.state.timeIn}
                            mode="time"
                            display="default"
                            is24Hour={true}
                            maximumDate={new Date}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logInfoContainer: {
        marginTop: 20,
        flex: 1,
        backgroundColor: '#000000',
    },
    infoTitle: {
        fontWeight: 'bold',
        color: '#ffffff',
        alignItems: 'flex-start',
    },
    text:{
        color: '#ffffff',
    },
    logInfo: {
        justifyContent: 'center',
        alignContent: 'stretch',
    },
    time: {
        flex: 1,
    },
    times: {
        flex: 2,
        flexDirection: 'row',
        alignContent: 'stretch'
    }
})
export default LogInfo;
