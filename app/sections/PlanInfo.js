import React, { Component } from 'react'
import { Button, Modal, StyleSheet, Text, View, Pressable, Alert } from 'react-native'
import {Input } from 'galio-framework';
import { Picker } from '@react-native-picker/picker'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import {navigate} from '../../rootNavigation';

import AddGas from './AddGas'

export class PlanInfo extends Component {
    constructor(props){
        super(props);

        this.state = {
            diveDepth: Number = 0,
            bottomTime: Number = 0,
            selectedAlgorithm: "b",
            gasAdded: Boolean =  false,
            modalVisible: false,
            depth: Number = 0,
            oxygen: Number = 0,
            nitrogen: Number,
            helium: Number,
        };

        this.setDepth = this.setDepth.bind(this);
        this.setOxygen = this.setOxygen.bind(this);
        this.setNitrogen = this.setNitrogen.bind(this);
        this.setHelium = this.setHelium.bind(this);
        this.setGas= this.setGas.bind(this);
        this.setSelectedAlgorithm = this.setSelectedAlgorithm.bind(this);
        this.setBottomTime = this.setBottomTime.bind(this);
        this.setDiveDepth = this.setDiveDepth.bind(this);
    }

    setDiveDepth(newDiveDepth){
        this.setState({diveDepth: newDiveDepth});
        console.log("Dive depth set");
    }

    setBottomTime(newBottomDepth){
        this.setState({bottomTime: newBottomDepth});
        console.log("Bottom time added");
    }

    setSelectedAlgorithm(item){
        this.setState({selectedAlgorithm: item});
        console.log(this.state.selectedAlgorithm);
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    setDepth(newDepth){
        this.setState({depth: newDepth});
    }

    setOxygen(newOxygen){
        this.setState({oxygen: newOxygen});
    }

    setNitrogen(newNitrogen){
        this.setState({nitrogen: newNitrogen});
    }

    setHelium(newHelium){
        this.setState({helium: newHelium});
    }

    setGas(){
        if(this.state.depth === 0 || this.state.oxygen === 0){
            Alert.alert("Make sure you've filled all mandatory fields");
        }else{
            this.setModalVisible(!this.state.modalVisible);
            this.setState({gasAdded: true});
            console.log("Gas added")
        }
    }
    handleSaveButton(){
        if(this.state.gasAdded === false || this.state.diveDepth === 0 || this.state.bottomTime === 0){
            Alert.alert("You must fill in all mandatory fields");
        }else{
            this.handleNavigation()
        }
    }

    handleNavigation = () => {
        navigate('planned', null);
    }

    render() {
        return (
            <KeyboardAwareScrollView>
                <View style={styles.centeredView}>
                    <Modal 
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            this.setModalVisible(!this.state.modalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.gasTitle}>Depth</Text>
                                <Input 
                                    placeholder="Depth"
                                    returnKeyType="done"
                                    onChangeText={this.setDepth}
                                    keyboardType="numeric"
                                />
                                <Text style={styles.gasTitle}>Oxygen</Text>
                                <Input 
                                    placeholder="Oxygen"
                                    returnKeyType="done"
                                    onChangeText={this.setOxygen}
                                    keyboardType="numeric"
                                />
                                <Text style={styles.gasTitle}>Nitrogen</Text>
                                <Input 
                                    placeholder="Nitrogen"
                                    returnKeyType="done"
                                    onChangeText={this.setNitrogen}
                                    keyboardType="numeric"
                                />
                                <Text style={styles.gasTitle}>Helium</Text>
                                <Input 
                                    placeholder="Helim"
                                    returnKeyType="done"
                                    keyboardType="numeric"
                                    onChangeText={this.setHelium}
                                />
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => this.setGas()}
                                >
                                    <Text style={styles.textStyle}>Add Gas</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => this.setModalVisible(!this.state.modalVisible)}
                    >
                        <Text style={styles.textStyle}>Add New Gas</Text>
                    </Pressable>
                </View>
                    <View style={styles.planInfoContainer}>
                    <Text style={styles.text}>
                        The dives are planned based on your gas used, the maximum depth of your dive & the planned length of the dive
                    </Text>
                    <Text style={styles.infoTitle}>Decompression Algorithm:</Text>
                    <Picker
                        selectedValue={this.state.selectedAlgorithm}
                        style={styles.decompressionPicker}
                        mode='dropdown'
                        onValueChange={(itemValue, itemIndex) =>
                        this.setSelectedAlgorithm(itemValue)
                    }>
                        <Picker.Item label="Bühlmann" value="b" />
                        <Picker.Item label="Varying Permeability Model" value="vpm" />
                    </Picker>
                    <Text style={styles.infoTitle}>
                        Max depth:
                    </Text>
                    <Input 
                        placeholder="Max depth"
                        keyboardType="numeric"
                        onChangeText={this.setDiveDepth}
                    />
                    <Text style={styles.infoTitle}>
                        Bottom time:
                    </Text>
                    <Input 
                        placeholder="Bottom Time"
                        keyboardType="numeric"
                        onChangeText={this.setBottomTime}
                    />
                </View>
                <Button 
                    title="Plan Dive"
                    onPress={() => this.handleSaveButton()}
                    style={styles.button}
                />
            </KeyboardAwareScrollView>
        )
    }
}

const styles = StyleSheet.create({
    planInfoContainer: {
        marginTop: 20,
        flex: 1,
        backgroundColor: '#000000',
    },
    text: {
        color: '#ffffff',
    },
    decompressionPicker: {
        backgroundColor: 'white',
        color: 'black',
    },
    infoTitle: {
        marginTop: 10,
        fontWeight: 'bold',
        color: '#ffffff',
        alignItems: 'flex-start',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "black",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#2196F3",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    gasTitle: {
        marginTop: 20,
        fontWeight: 'bold',
        color: '#ffffff',
    },
})
export default PlanInfo;
