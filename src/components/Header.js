import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native';




function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.searchPart}>
                    <TextInput style={styles.input} placeholder='search' />
                </View>
                <View style={styles.icon}>
                    <View style={styles.animalIcon}></View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 17,
        backgroundColor: 'red',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    header: {
        width: '100%',
        height: 100,
        backgroundColor: '#181818',
        flexDirection: 'row'
    },
 searchPart: {
     flex: 1,
     backgroundColor: '#DBE1ED',
     alignItems: 'center',
    paddingTop: 10
 },
 input: {
     backgroundColor: '#eeeeee',
     width: '70%',
     height: '15%'
 },
 icon: {
    flex: 1,
    backgroundColor: '#181818',
    alignItems: 'flex-end',
    paddingRight: 10,
    paddingTop: 10

},
animalIcon: {
    width: '30%',
    height: '40%',
    backgroundColor: '#eeeeee'
},

})

export default Header
