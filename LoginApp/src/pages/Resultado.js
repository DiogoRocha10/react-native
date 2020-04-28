import React, { useState} from 'react'
import { StyleSheet, Text, View} from 'react-native'

const Resultado = (props) => {
    const { navigation } = props

    return (
        <View style={styles.container}>
            <Text>oi</Text>
        </View>
    )

}
export default Resultado

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})