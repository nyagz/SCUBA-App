import React, { Component } from 'react'
import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import {Input } from 'galio-framework';
import { Picker } from '@react-native-picker/picker'

import AddGas from './AddGas'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export class PlanInfo extends Component {
    constructor(props){
        super(props);

        this.state = {
            depth: Number = 0,
            bottomTime: Number = 0,
            selectedAlgorithm: "b",
        }
    }

    setDepth(newDepth){
        this.setState({depth: newDepth});
    }

    setBottomDepth(newBottomDepth){
        this.setState({bottomTime: newBottomDepth});
    }

    setSelectedAlgorithm(item){
        this.setState({selectedAlgorithm: item})
    }

    render() {
        return (
            <KeyboardAwareScrollView>
                    <View style={styles.planInfoContainer}>
                    <Text style={styles.text}>
                        The dives are planned based on your gas used, the maximum depth of your dive & the planned length of the dive
                    </Text>
                    <AddGas />
                    <Text style={styles.infoTitle}>Decompression Algorithm:</Text>
                    <Picker
                        selectedValue={this.state.selectedAlgorithm}
                        style={styles.decompressionPicker}
                        mode='dropdown'
                        onValueChange={(itemValue, itemIndex) =>
                        this.setSelectedAlgorithm(itemValue)
                    }>
                        <Picker.Item label="Bühlmann" value="b" />
                        <Picker.Item label="VPM" value="vpm" />
                    </Picker>
                    <Text style={styles.infoTitle}>
                        Max depth:
                    </Text>
                    <Input 
                        placeholder="Max depth"
                        keyboardType="numeric"
                        onPress={this.setDepth}
                    />
                    <Text style={styles.infoTitle}>
                        Bottom time:
                    </Text>
                    <Input 
                        placeholder="Bottom Time"
                        keyboardType="numeric"
                        onPress={this.setBottomDepth}
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
        marginTop:20,
        color: '#ffffff',
    },
    decompressionPicker: {
        backgroundColor: 'white',
        color: 'black',
    },
    infoTitle: {
        fontWeight: 'bold',
        color: '#ffffff',
        alignItems: 'flex-start',
    },
})
export default PlanInfo;
