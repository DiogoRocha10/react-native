import React, { useState }  from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

const Home = (props) => {
    const { navigation } = props

    const [km, setKm] = useState("")
    const [litros, setLitros] = useState("")
    const [error, setError] = useState("")

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Informe os dados abaixo!</Text>

            <TextInput
                style={styles.caixaTexto}
                placeholder="Kilometragem"
                onChangeText={(valor) => setKm(valor)}
                value={km}
                keyboardType={'numeric'}
            />
            <TextInput
                style={styles.caixaTexto}
                placeholder="Litros"
                onChangeText={(valor) => setLitros(valor)}
                value={litros}
                keyboardType={'numeric'}
            />

            <Text style={styles.textError}>{error}</Text>

            <View style={styles.botaoDefault}>
              <Button
                title="Calcular"
                onPress={() => {
                  let isValid = !!km && !!litros
                  if (!isValid) {
                    setError('Dados Incorretos!')
                    return
                  }
                  setError('')
                  navigation.navigate("Resultado", {km, litros})
                }}
                color="#3AC330"
              />
            </View>
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
      width: "75%",
      padding: 5,
      marginTop: 5
  },
  botaoDefault: {
      marginTop: 25
  },
  textStyle:{
    fontSize: 18,
    margin: 20
  },
  textError:{
    fontSize: 18,
    margin: 20,
    color: 'red',
    alignItems: 'center',
  }
});