import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState, useEffect } from 'react';


export default function CalculatorApp({ navigation }) {

    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [result, setResult] = useState("");
    const [history, setHistory] = useState([]);

    const calculateAddition = () => {
        const sum = value1 + value2;
        setResult(sum);
        setHistory([...history, `${value1} + ${value2} = ${sum}`])

        setValue1("");
        setValue2("");
    }

    const calculateSubtraction = () => {
        const difference = value1 - value2;
        setResult(difference);
        setHistory([...history, `${value1} - ${value2} = ${difference}`]);

        setValue1("");
        setValue2("");
    }

    useEffect(() => {
        const clearResult = navigation.addListener('focus', () => {
            setResult("");
        });

        return clearResult;
    }, [navigation]);

    return (
        <View style={styles.container}>

            <View style={styles.viewStyle}>
                <Text>Result: {result}</Text>

                <TextInput
                    style={styles.textInput}
                    onChangeText={number => setValue1(parseFloat(number))}
                    keyboardType='decimal-pad'
                    value={value1}
                />

                <TextInput
                    style={styles.textInput}
                    onChangeText={number => setValue2(parseFloat(number))}
                    keyboardType='decimal-pad'
                    value={value2}
                />
            </View>

            <View style={styles.buttons}>
                <Button title="+" onPress={() => { calculateAddition() }} />
                <Button title="-" onPress={() => { calculateSubtraction() }} />
                <Button title="History" onPress={() => navigation.navigate('History', { history })} />

            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dad5e0',
        alignItems: 'center',
        justifyContent: 'center',

    },

    viewStyle: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    textInput: {
        width: 200,
        borderColor: '#61566e',
        borderWidth: 2
    },

    buttons: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: 150,
        justifyContent: 'space-around',
    },
});