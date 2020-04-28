import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Resultado = (props) => {
    const { navigation } = props
    const { route } = props

    const { km, litros } = route.params

    const getConsumo = () => {
      let consumo = km / litros
      if(consumo <= 4){
        return 'E'
      }else if (consumo <= 8){
        return 'D'
      }else if (consumo <= 10){
        return 'C'
      }else if (consumo <= 12){
        return 'B'
      }else {
        return 'A'
      }
    } 

    return (
        <View style={styles.containerMain}>

            <Text style={styles.textStyle}> Consumo: {(km/litros).toFixed(2)} Km/L </Text>

            <Text style={styles.textStyle}> Categoria: {getConsumo()} </Text>


            <View style={styles.botaoDefault}>
                <Button 
                title="VOLTAR"
                color= "#3AC330"
                onPress={() => navigation.replace("Home")}
                style={styles.backText}
                />
                <Button 
                title="SAIR"
                color= "red"
                onPress={() => navigation.replace("Login")}
                style={styles.backText}
                />

            </View>
      </View>
    )
}

export default Resultado

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoDefault: {
    width: "40%",
    padding: 5,
    marginTop: 5,
  },
  backText: {
    color: '#fff',
    fontSize: 18,
  },
  textStyle: {
    fontSize: 24,
    margin: 5
  },
});