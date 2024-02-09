import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function History({ route }) {

    const { history } = route.params;

    return (
        <View style={styles.historyStyle}>
            <View style={styles.list}>
                <Text>History</Text>
                <FlatList
                    data={history}
                    renderItem={({ item }) =>
                        <View style={styles.listItem}>
                            <Text>{item}</Text>
                        </View>}
                />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    historyStyle: {
        flex: 1,
        backgroundColor: '#dad5e0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        flex: 5,
        width: 300,
        alignItems: 'center'
    },

    listItem: {
        flexDirection: "row",
        width: 300,
        justifyContent: 'center',
    }
});
