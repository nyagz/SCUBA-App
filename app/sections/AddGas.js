import { Input } from 'galio-framework'
import React, { Component } from 'react'
import { Text, View, StyleSheet, Modal, Pressable, Alert } from 'react-native'

export class AddGas extends Component {
    constructor(props){
        super(props)

        this.state = {
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
        }
    }
    render() {
        return (
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
                                onChangeText={this.setNitrogen}
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
        )
    }
}

const styles = StyleSheet.create({
    gasTitle: {
        marginTop: 20,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
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
})
export default AddGas;
