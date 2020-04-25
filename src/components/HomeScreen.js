import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './Header';

const Poster = () => {
    return (
        <View style={styles.poster}>
            <View style={styles.introduction}>
                <View style={styles.part1} ></View>
                <View style={styles.part2} ></View>
            </View>
        </View>
    )
}

const Main = () => {
    return (
        <View style={styles.main}>
            <View style={styles.heading}>
                <View style={styles.txt}></View>
            </View>
            <View style={styles.cards}>
                <View style={styles.card1}>
                    <View style={styles.info}></View>
                </View>
                <View style={styles.card2}>
                    <View style={styles.info}></View>
                </View>
                <View style={styles.card3}>
                    <View style={styles.info}></View>
                </View>
            </View>
        </View>
    )
}

function HomeScreen({ navigation }) {
    return (
        <View>
            <Text>Home</Text>
            <Button title='Go to Details' onPress={() => navigation.navigate('Details')} ></Button>
            <Header />
            <Poster />
            <Main />
        </View>
    )
}

const styles = StyleSheet.create({
    poster: {
        width: '100%',
        height: 170,
        backgroundColor: '#021C4E',
        justifyContent: 'center',
        alignItems: 'center'
    },
    introduction: {
        width: '70%',
        height: '70%',
        backgroundColor: '#eeeeee',
        justifyContent: 'flex-end'
    },
    part1: {
        width: '100%',
        height: '20%',
        backgroundColor: '#AF7A74'
    },
    part2: {
        width: '100%',
        height: '20%',
        backgroundColor: '#A3A2C9'
    },
    main: {
        width: '100%',
        height: 350,
        backgroundColor: '#021C4E',
        alignItems: 'center',
        
    },
    heading: {
        width: '100%',
        height: 100,
        backgroundColor: '#eeeeee',
        borderTopLeftRadius: 20,
        justifyContent: 'flex-end'

    },
    txt: {
        backgroundColor: '#a3a2c9',
        width: '100%',
        height: 50
    },
    cards: {
        width: '90%',
        height: '90%',
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center'
    },
    card1: {
        flex: 1,
        margin: 6,
        height: 160,
        backgroundColor: '#AF7A74',
        justifyContent: 'flex-end'
        
    },
    card2: {
        flex: 1,
        height: 160,
        margin: 6,
        backgroundColor: '#AF7A74',
        justifyContent: 'flex-end'
    },
    card3: {
        flex: 1,
        margin: 6,
        height: 160,
        backgroundColor: '#AF7A74',
        justifyContent: 'flex-end'
    },
  
    info: {
        backgroundColor: 'white',
        height: 40
    }
})
export default HomeScreen
