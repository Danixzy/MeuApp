import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function RootLayout() {

  const [number, onChangeNumber] = React.useState('');
  const [resultado, onChangeResultado] = React.useState('');

  function Clear(){
    onChangeNumber("")
    onChangeResultado("")
  }

  function Calcular() {
    try {
      const expressao = number.replace(/X/g, '*').replace(/,/g, '.');
      const calculo = eval(expressao);
      onChangeResultado(String(calculo));
    } catch (error) {
      onChangeResultado("Erro");
    }
  }

  function Raiz(){
    try {
    const expressao = parseFloat(number.replace(/X/g, '*').replace(/,/g, '.'));
    const calculo = Math.sqrt(expressao)
    onChangeResultado(String(calculo));
    } catch (error) {
      onChangeResultado("Erro");
    }
  }

 function handleOperator(op: string) {
  switch (op) {
   case '+':
     onChangeNumber(prev => prev + '+');
     break;
   case '-':
     onChangeNumber(prev => prev + '-');
        break;
      case 'X':
        onChangeNumber(prev => prev + 'X');
        break;
      case '/':
        onChangeNumber(prev => prev + '/');
        break;
     default:
       break;
    }
  }

  return (
    <View style={styles.container}>
        <View style={styles.backgroundcontainer}>
          <View style={styles.visor}>
           {resultado !== '' ? <Text style={styles.textcolorapag}>{number}</Text> : <Text style={styles.textcolor}>{number}</Text>}
          {resultado !== '' ? <Text style={styles.textcolor}>{resultado}</Text> : null}
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.buttonsLightGray} onPress={() => Clear()}><Text style={styles.textcolor}>AC</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttonsLightGray}><Text style={styles.textcolor}>+/-</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttonsLightGray} onPress={() => Raiz()} ><Text style={styles.textcolor}>raiz</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttonsYellow} onPress={() => handleOperator('/')}><Text style={styles.textcolor}>/</Text></TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.buttons}onPress={() => onChangeNumber(prev => prev + "7")}><Text style={styles.textcolor}>7</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={() => onChangeNumber(prev => prev + "8")}><Text style={styles.textcolor}>8</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={() => onChangeNumber(prev => prev + "9")}><Text style={styles.textcolor}>9</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttonsYellow} onPress={() => handleOperator('X')} ><Text style={styles.textcolor}>X</Text></TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.buttons} onPress={() => onChangeNumber(prev => prev + "4")}><Text style={styles.textcolor}>4</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={() => onChangeNumber(prev => prev + "5")}><Text style={styles.textcolor}>5</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={() => onChangeNumber(prev => prev + "6")}><Text style={styles.textcolor}>6</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttonsYellow} onPress={() => handleOperator('-')} ><Text style={styles.textcolor}>-</Text></TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.buttons} onPress={() => onChangeNumber(prev => prev + "1")}><Text style={styles.textcolor}>1</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={() => onChangeNumber(prev => prev + "2")}><Text style={styles.textcolor}>2</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={() => onChangeNumber(prev => prev + "3")}><Text style={styles.textcolor}>3</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttonsYellow} onPress={() => handleOperator('+')} ><Text style={styles.textcolor}>+</Text></TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.buttons}><Text style={styles.textcolor}>cal</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={() => onChangeNumber(prev => prev + "0")}><Text style={styles.textcolor}>0</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={() => onChangeNumber(prev => prev + ",")}><Text style={styles.textcolor}>,</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttonsYellow} onPress={() => Calcular()} ><Text style={styles.textcolor}>=</Text></TouchableOpacity>
          </View>
        </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  row: {
    flexDirection: 'row',
  },
  buttons: {
    flex: 1,
    backgroundColor: "rgb(68, 70, 73)",
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    margin: 3,
  },
  buttonsYellow: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: "#ff9100",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    margin: 3,
  },
  buttonsLightGray: {
    flex: 1,
    backgroundColor: "rgb(132, 132, 133)",
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    margin: 3,
  },
  backgroundcontainer: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "flex-end", 
    paddingHorizontal: 10,
    paddingBottom: 40,
  },
  textcolor: {
    color: "#f3f3f3",
    fontSize: 30,
    fontWeight: "400",
  },
  textcolorapag: {
    marginBottom: 5,
    color: "#c7c7c783",
    fontSize: 25,
  },
  visor: {
    flex: 1,
    justifyContent: "flex-end", 
    alignItems: "flex-end",
    paddingHorizontal: 15,
    marginBottom: 30,
  }
});