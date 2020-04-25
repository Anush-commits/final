import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

function List({navigation}) {
    return (
        <View>
            <Text>List</Text>
            <Button title='Go to Home' onPress={() => navigation.navigate('Home') }></Button>
        </View>
    )
}

export default List
