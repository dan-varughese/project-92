import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export default class ManageScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stickerName: '',
            stickerId: '',
            selectedId: null,
            stickers: [] // Add this to store the list of stickers
        };
    }

    renderItem = ({ item }) => {
        const backgroundColor = item.id === this.state.selectedId ? "#6e3b6e" : "#f9c2ff";
        const color = item.id === this.state.selectedId ? 'white' : 'black';

        return (
            <TouchableOpacity 
                onPress={() => this.setState({ selectedId: item.id })}
                style={[styles.item, { backgroundColor }]}
            >
                <Text style={[styles.itemText, { color }]}>{item.name}</Text>
            </TouchableOpacity>
        );
    };

    keyExtractor = (item, index) => index.toString();

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headings}>
                    Manage Stickers
                </Text>
                <FlatList
                    data={this.state.stickers}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                    style={styles.flatlist}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    headings: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    flatlist: {
        borderWidth: 1,
        borderColor: 'black',
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 5,
    },
    itemText: {
        fontSize: 15,
    },
});
