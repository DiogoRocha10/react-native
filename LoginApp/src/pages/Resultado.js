import React, { useState} from 'react'
import { StyleSheet, Text, View} from 'react-native'

const Resultado = (props) => {
    const { navigation } = props

    return (
        <View style={styles.container}>
            <Text>oi</Text>

            <Button
                title="Calcular Novamente"
                onPress={() => navigation.replace("Home")}
                color="green"
            />
            <Button
                title="Logoff"
                onPress={() => navigation.replace("Login")}
                color="red"
            />
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
    },
    botaoDefault: {
        width: "90%",
        padding: 5,
        marginTop: 5
    }
})