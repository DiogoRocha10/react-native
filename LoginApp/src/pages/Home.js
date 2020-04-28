import React, { useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button} from 'react-native'

const Home = (props) => {
    const { navigation } = props

    const [kilometragem, setKilometragem] = useState("")
    const [litros, setLitros] = useState("")
    const [msg, setMsg] = useState("")

    const getConsumo = () => {
        let consumo = kilometragem / litros
        if(consumo <= 4){
            setMsg('E') 
        }else if (consumo <= 8){
            setMsg('D')
        }else if (consumo <= 10){
            setMsg('C')
        }else if (consumo <= 12){
            setMsg('B')
        }else {
            setMsg('A')
        }
    }

    return (
        <View>
            <TextInput
                style={styles.caixaTexto}
                placeholder="Litros"
                onChangeText={(valor) => setLitros(valor)}
                value={litros}
                keyboardType={'numeric'}
            />
            <TextInput
                style={styles.caixaTexto}
                placeholder="Kilometragem"
                secureTextEntry={true}
                onChangeText={(valor) => setKilometragem(valor)}
                value={kilometragem}
                keyboardType={'numeric'}
            />
            <Button
                title="Calcular"
                onPress={() => getConsumo(navigation.replace("Resultado"))}
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

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    caixaTexto: {
        borderWidth: 1,
        borderColor: 'gray',
        width: "90%",
        padding: 5,
        marginTop: 5
    },
    botaoDefault: {
        width: "90%",
        padding: 5,
        marginTop: 5
    }
});
