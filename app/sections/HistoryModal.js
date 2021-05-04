import React, { Component } from 'react'
import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

export class HistoryModal extends Component {
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
                            On this page you will be able to see the logs for all of your past dives.
                        </Text>
                        <Text style={styles.modalText}>
                            Whether you want to check what number dive you're on or reminisce on the fish seen at a particular dive location. We've got you covered
                        </Text>
                        <Text style={styles.modalText}>
                            Don't worry if you haven't logged any dives yet. Just clock on the log button and it will take you to the page where all dive logs are added.
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

export default HistoryModal;

//Previous button open colour: #F194FF