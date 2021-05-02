import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { List } from 'react-native-paper';

//Added Accordion code as layout,
// Accordion will be neater than table so use this instead
export class HistoryInfo extends Component {
    render() {
        return (
            <List.Accordion
                title="Dive Identifiers"
                style={styles.accordion}
            >
                <List.Item 
                    title="First Item"
                    style={styles.accordionItem}
                />
            </List.Accordion>
        )
    }
}

const styles = StyleSheet.create({
    accordion: {
        backgroundColor: '#2196F3',
        color: '#000000',
    },
    accordionItem: {
        color: '#000000',
        backgroundColor: '#ffffff',
    }
})

export default HistoryInfo;