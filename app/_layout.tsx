import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function RootLayout() {

  const [number, onChangeNumber] = React.useState('');
  const [resultado, onChangeResultado] = React.useState('');
  const [operacao, onChangeOperacao] = React.useState('');
  const [expressao, setExpressao] = React.useState('');

  function Clear(){
    onChangeNumber("")
    onChangeResultado("")
  }

  function Calcular(){
    onChangeNumber(prev => prev + "=")
    setExpressao(`${number}`)
    onChangeResultado(eval(expressao))
  }

  function Somar(){
    onChangeOperacao("+")
    onChangeNumber(prev => prev + "+")
  }

  function Subtrair(){
     onChangeOperacao("-")
     onChangeNumber(prev => prev + "-")
  }

  function Multiplicar(){
     onChangeOperacao("*")
     onChangeNumber(prev => prev + "X")
  }

  function Dividir(){
     onChangeOperacao("/")
     onChangeNumber(prev => prev + "/")
  }

  return (
    <View style={styles.container}>
        <View style={styles.backgroundcontainer}>
          <View style={styles.visor}>
          <Text style={styles.textcolor}>{number}{resultado}</Text>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.numbers} onPress={() => Clear()}><Text style={styles.textcolor}>AC</Text></TouchableOpacity>
            <TouchableOpacity style={styles.numbers}><Text style={styles.textcolor}>+/-</Text></TouchableOpacity>
            <TouchableOpacity style={styles.numbers} onPress={() => Dividir()} ><Text style={styles.textcolor}>%</Text></TouchableOpacity>
            <TouchableOpacity style={styles.numbers}><Text style={styles.textcolor}>sla</Text></TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.numbers}onPress={() => onChangeNumber(prev => prev + "7")}><Text style={styles.textcolor}>7</Text></TouchableOpacity>
            <TouchableOpacity style={styles.numbers} onPress={() => onChangeNumber(prev => prev + "8")}><Text style={styles.textcolor}>8</Text></TouchableOpacity>
            <TouchableOpacity style={styles.numbers} onPress={() => onChangeNumber(prev => prev + "9")}><Text style={styles.textcolor}>9</Text></TouchableOpacity>
            <TouchableOpacity style={styles.numbers} onPress={() => Multiplicar()} ><Text style={styles.textcolor}>X</Text></TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.numbers} onPress={() => onChangeNumber(prev => prev + "4")}><Text style={styles.textcolor}>4</Text></TouchableOpacity>
            <TouchableOpacity style={styles.numbers} onPress={() => onChangeNumber(prev => prev + "5")}><Text style={styles.textcolor}>5</Text></TouchableOpacity>
            <TouchableOpacity style={styles.numbers} onPress={() => onChangeNumber(prev => prev + "6")}><Text style={styles.textcolor}>6</Text></TouchableOpacity>
            <TouchableOpacity style={styles.numbers} onPress={() => Subtrair()} ><Text style={styles.textcolor}>-</Text></TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.numbers} onPress={() => onChangeNumber(prev => prev + "1")}><Text style={styles.textcolor}>1</Text></TouchableOpacity>
            <TouchableOpacity style={styles.numbers} onPress={() => onChangeNumber(prev => prev + "2")}><Text style={styles.textcolor}>2</Text></TouchableOpacity>
            <TouchableOpacity style={styles.numbers} onPress={() => onChangeNumber(prev => prev + "3")}><Text style={styles.textcolor}>3</Text></TouchableOpacity>
            <TouchableOpacity style={styles.numbers} onPress={() => Somar()} ><Text style={styles.textcolor}>+</Text></TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.numbers}><Text style={styles.textcolor}>cal</Text></TouchableOpacity>
            <TouchableOpacity style={styles.numbers}><Text style={styles.textcolor}>0</Text></TouchableOpacity>
            <TouchableOpacity style={styles.numbers}><Text style={styles.textcolor}>,</Text></TouchableOpacity>
            <TouchableOpacity style={styles.numbers} onPress={() => Calcular()} ><Text style={styles.textcolor}>=</Text></TouchableOpacity>
          </View>
        </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
  },
    row: {
    flexDirection: 'row',
    gap: 2
  },
    numbers: {
      width: 50,
      height: 50,
      backgroundColor: "#165fe7ff",
      alignItems: "center",
      borderRadius: 50,
    },
    backgroundcontainer: {
      backgroundColor: "#000000ff",
      padding: 10,
    },
    textcolor: {
      marginTop: 14,
      color: "#f3f3f3",
    },
    visor: {
    }
});
