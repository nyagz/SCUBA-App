import React, { Component } from 'react'
import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

export class PlanModal extends Component {
    state = {
        modalVisible: false
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    
    render() {
        const{ modalVisible } = this.state;
        return (
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        this.setModalVisible(!modalVisible);
                    }}
                >

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                            Hello!
                        </Text>
                        <Text style={styles.modalText}>
                            On this page you will be able to plan a scuba dive.
                        </Text>
                        <Text style={styles.modalText}>
                            You can plan your dive using Bühlmann's decompression algorithm or using the Varying Permeability Model bubble method.
                        </Text>
                        <Text style={styles.modalText}>
                            Don't worry if you don't know what either of these are. All that matters is that we minimise the risk of you getting decompression sickness.    
                        </Text>
                        <Text style={styles.modalText}>
                            To do this all we need from you is to let us know what gas mixes you plan on using on your dive, what your planned maximum depth is and the amount of time you plan on spending at that depth. We will sort out the rest!
                        </Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => this.setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Hide Instructions</Text>
                        </Pressable>
                    </View>
                </View>
                </Modal>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => this.setModalVisible(true)}
                >
                    <Text style={styles.textStyle}>Show Instructions</Text>
                </Pressable>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
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
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})

export default PlanModal;

//Previous button open colour: #F194FF