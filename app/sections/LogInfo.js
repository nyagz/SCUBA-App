import React, { Component, useState } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, View, Button } from 'react-native'
import {Input } from 'galio-framework';
import DateTimePicker from '@react-native-community/datetimepicker';
import { List } from 'react-native-paper';
import Autcomplete from 'react-native-autocomplete-input';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Autocomplete from 'react-native-autocomplete-input';
import { Row } from 'react-native-table-component';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RadioButton } from 'react-native-paper';
import { RadioGroup } from 'react-native-radio-buttons-group';

// TODO: Make countries auto complete
// FIXME: Work around for bottomTime and Depth

const radioButtonsData = [{
    id: '1',
    label: (
        <Text style={{color: '#ffffff'}}>bar</Text>
    ),
    value: 'bar',
}, {
    id: '2',
    label: (
        <Text style={{color: '#ffffff'}}>psi</Text>
    ),
    value: 'psi',
}]

export class LogInfo extends Component {
    constructor(props){
        super(props);

        this.state = {
            diveNumber: Number,
            name: '',
            country: '',
            location: '',
            chosenDate: new Date(),
            timeIn: new Date(),
            timeOut: new Date(),
            bottomTime: Number = 0,
            depth: Number = 0,
            visibility: '',
            airTemp: Number,
            surfaceTemp: Number,
            BottomTemp: Number,
            tempUnit: '',
            startPressure: Number,
            pressureUnit: radioButtonsData,
            endPressure: Number,
            bcd: '',
            wetsuit: '',
            fins: '',
            weights: Number,
        };

        this.setDiveNumber = this.setDiveNumber.bind(this);
        this.setName = this.setName.bind(this);
        this.setCountry = this.setCountry.bind(this);
        this.setLocation = this.setLocation.bind(this);
        this.setDate = this.setDate.bind(this);
        this.setTimeIn = this.setTimeIn.bind(this);
        this.setTimeOut = this.setTimeOut.bind(this);
        this.setBottomTime = this.setBottomTime.bind(this);
        this.setDepth = this.setDepth.bind(this);
        this.setvisibility = this.setVisibility.bind(this);
        this.setAirTemp = this.setAirTemp.bind(this);
        this.setSurfaceTemp = this.setSurfaceTemp.bind(this);
        this.setBottomTemp = this.setBottomTemp.bind(this);
        this.setStartPressure = this.setStartPressure.bind(this);
        this.setEndPressure = this.setEndPressure.bind(this);
        this.setPressureUnit = this.setPressureUnit.bind(this);
        this.setBCD = this.setBCD.bind(this);
        this.setWetsuit = this.setWetsuit.bind(this);
        this.setFins = this.setFins.bind(this);
        this.weights = this.setWeights.bind(this);
        
    }

    setDiveNumber(newDiveNumber){
        this.setState({diveNumber: newDiveNumber});
        console.log(this.state.diveNumber);
    }

    setDate(newDate){
        this.setState({chosenDate: new Date(newDate)});
    }

    setTimeIn(newTimeIn){
        this.setState({timeIn: new Date(newTimeIn)})
    }

    setTimeOut(newTimeOut){
        this.setState({timeOut: new Date(newTimeOut)})
    }

    setName(newName){
        this.setState({name: newName});
    }

    setCountry(newCountry){
        this.setState({country: newCountry});
    }

    setLocation(newLocation){
        this.setState({location: newLocation});
    }

    setBottomTime(newBottomTime){
        this.setState({bottomTime: newBottomTime});
    }

    setDepth(newDepth){
        this.setState({depth: newDepth});
    }

    setVisibility(newVisibility){
        this.setState({visibility: newVisibility});
    }

    setAirTemp(newAirTemp){
        this.setState({airTemp: newAirTemp});
    }

    setSurfaceTemp(newSurfaceTemp){
        this.setState({surfaceTemp: newSurfaceTemp});
    }

    setBottomTemp(newBottomTemp){
        this.setState({bottomTime: newBottomTemp});
    }

    setStartPressure(newPessureIn){
        this.setState({pressureIn: newPessureIn});
    }

    setEndPressure(newPressureOut){
        this.setState({pressureOut: newPressureOut});
    }
    
    setPressureUnit(newUnit){
        this.setState({pressureUnit: newUnit});
        console.log(this.state.pressureUnit);
    }

    setBCD(newBCD){
        this.setState({bcd: newBCD});
    }

    setWetsuit(newWetsuit){
        this.setState({wetsuit: newWetsuit});
    }

    setFins(newFins){
        this.setState({fins: newFins});
    }

    setWeights(newWeights){
        this.setState({weights: newWeights});
    }

    handleSaveButton(){
        if(this.state.name === "" || this.state.country === "" || this.state.location === "" || this.state.bottomTime === 0 || this.state.depth === 0){
            Alert.alert("You must fill all mandatory fields before saving your dive log")
        } else{
            Alert.alert("Figure out what I need to do here")
        }
    }

    render() {
        return (
            <KeyboardAwareScrollView 
                style={styles.logInfoContainer}
                extraHeight={200}
                enableOnAndroid={true}
            >
                <View>
                    <Text style={styles.sectionTitle}>
                        Dive identifiers
                    </Text>
                    <Text style={styles.infoTitle}>
                        Dive number:
                    </Text>
                    <View style={styles.logStyle}>
                        <Input 
                            placeholder="Dive Number..."
                            keyboardType="numeric"
                            onChangeText={this.setDiveNumber}
                            returnKeyType="done"
                        />
                    </View>
                    <Text style={styles.infoTitle}>
                        Dive name:
                    </Text>
                    <View style={styles.logStyle}>
                        <Input 
                            placeholder="Name your dive..."
                            onChangeText={this.setName}
                            returnKeyType="done"
                    />
                    </View>
                    <Text style={styles.infoTitle}>
                        Date:
                    </Text>
                    <DateTimePicker 
                        value={this.state.chosenDate}
                        maximumDate={new Date}
                        mode='date'
                        display='default'
                        onChange={(event, selectedDate) => {
                            this.setDate(new Date(selectedDate));
                        }}
                    />
                    <View>
                        <Text style={styles.infoTitle}>
                            Country:
                        </Text>
                        <Input 
                            placeholder="Country"
                            onChangeText={this.setCountry}
                            returnKeyType="done"
                        />
                    </View>
                    <Text style={styles.infoTitle}>
                        Location:
                    </Text>
                    <Input 
                        placeholder="Dive location..."
                        onChangeText={this.setLocation}
                        returnKeyType="done"
                    />
                    <Text style={styles.sectionTitle}>Dive Info</Text>
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
                                maximumDate={this.state.timeOut}
                                onChange={(event, selectedDate) => {
                                    this.setTimeIn(new Date(selectedDate));
                                }}
                            />
                        </View>
                        <View style={styles.time}>
                            <Text style={styles.infoTitle}>
                                Time Out:
                            </Text>
                            <DateTimePicker
                                value={this.state.timeOut}
                                mode="time"
                                display="default"
                                is24Hour={true}
                                minimumDate={this.state.timeIn}
                                maximumDate={new Date}
                                onChange={(event, selectedDate) => {
                                    this.setTimeOut(new Date(selectedDate));
                                }}
                            />
                        </View>
                    </View>
                    <Text style={styles.infoTitle}>
                        Bottom time:
                    </Text>
                    <Input 
                        placeholder="Bottom time (mins)"
                        keyboardType="numeric"
                        onChangeText={this.setBottomTime}
                        returnKeyType="done"
                    />
                    <Text style={styles.infoTitle}>
                        Depth:
                    </Text>
                    <Input 
                        placeholder="Depth (metres)"
                        keyboardType="numeric"
                        onChangeText={this.setDepth}
                        returnKeyType="done"
                    />
                    <Text style={styles.subSectionTitle}>Pressures</Text>
                    <View style={styles.Radio}>
                        <Text style={styles.infoTitle}>
                            Pressure Unit
                        </Text>
                        <RadioGroup 
                            radioButtons={radioButtonsData}
                            horizontal
                            onChange={this.setPressureUnit}
                        />
                        <Text style={styles.text}>{this.pressureUnit}</Text>
                    </View>
                    <View style={styles.pressures}>
                        <View style={styles.pressure}>
                            <Text style={styles.infoTitle}>
                                Start pressure:
                            </Text>
                            <Input 
                                placeholder="Starting pressure"
                                onChangeText={this.setStartPressure}
                                returnKey="done"
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={styles.pressure}>
                            <Text style={styles.infoTitle}>
                                End pressure:
                            </Text>
                            <Input 
                                placeholder="End pressure"
                                onChangeText={this.setEndPressure}
                                returnKey="done"
                                keyboardType="numeric"
                            />
                        </View>
                    </View>
                    <Text></Text>
                    <Text style={styles.infoTitle}>
                        Visibility:
                    </Text>
                    <Input 
                        placeholder="Visibility"
                        onChangeText={this.setVisibility}
                        returnKeyType="done"
                    />
                    <Text style={styles.subSectionTitle}>Temperatures</Text>
                    <View style={styles.temps}>
                        <View style={styles.temp}>
                            <Text style={styles.infoTitle}>Air:</Text>
                            <Input 
                                placeholder="Air"
                                keyboardType="numeric"
                                onChangeText={this.setAirTemp}
                                returnKeyType="done"
                            />
                        </View>
                        <View style={styles.temp}>
                            <Text style={styles.infoTitle}>Surface:</Text>
                            <Input 
                                placeholder="Surface"
                                keyboardType="numeric"
                                onChangeText={this.setSurfaceTemp}
                                returnKeyType="done"
                            />
                        </View>
                        <View style={styles.temp}>
                            <Text style={styles.infoTitle}>Bottom:</Text>
                            <Input 
                                placeholder="Bottom"
                                keyboardType="numeric"
                                onChangeText={this.setBottomTemp}
                                returnKeyType="done"
                            />
                        </View>
                    </View>
                    <Text style={styles.sectionTitle}>Dive Equipment Used</Text>
                    <Text style={styles.infoTitle}>
                        BCD:
                    </Text>
                    <Input 
                        placeholder="BCD"
                        returnKeyType="done"
                        onChangeText={this.setBCD}
                    />
                    <Text style={styles.infoTitle}>Wetsuit:</Text>
                    <Input 
                        placeholder="Wetsuit"
                        returnKeyType="done"
                        onChangeText={this.setWetsuit}
                    />
                    <Text style={styles.infoTitle}>Fins:</Text>
                    <Input 
                        placeholder="Fins"
                        returnKeyType="done"
                        onChangeText={this.setFins}
                    />
                    <Text style={styles.infoTitle}>Weights:</Text>
                    <Input 
                        placeholder="Weights"
                        returnKeyType="done"
                        onChangeText={this.setWeights}
                    />
                </View>
                <Button 
                    title="Add Log"
                    onPress={() => this.handleSaveButton()}
                    style={styles.button}
                />
            </KeyboardAwareScrollView>
        )
    }
}

const styles = StyleSheet.create({
    logInfoContainer: {
        marginTop: 20,
        flex: 1,
        backgroundColor: '#000000',
    },
    keyboardContainer: {
        flex: 1,
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
    },
    temps: {
        flex: 3,
        flexDirection: 'row',
    },
    temp: {
        flex: 1,
    },
    accordion: {
        backgroundColor: '#ffffff',
        color: '#000000',
    },
    inner: {
        flex: 1,
        justifyContent: "space-around"
    },
    button: {
        marginBottom: 100,
        marginTop: 100,
    },
    sectionTitle: {
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#ffffff',
        marginBottom: 10,
        marginTop: 10,
    },
    subSectionTitle: {
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 10,
        marginTop: 10,
    },
    pressures: {
        flexDirection: 'row',
        flex: 1,
    },
    pressure: {
        flex: 1,
    },
    Radio: {
        alignContent: 'flex-start',
        alignItems: 'flex-start',
    },
})
export default LogInfo;
