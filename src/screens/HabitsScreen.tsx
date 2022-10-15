import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const HabitsScreen = () => {
  return (
    <View style={ styles.container }>
        <Text style={ styles.title }>Habitos...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        color: 'white',
    }
});