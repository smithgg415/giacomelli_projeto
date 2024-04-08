import React from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import js from "./assets/js.png";
import php from "./assets/php.png";
import csharp from "./assets/c.png";

export default function App() {

  const handlePressLinguagem = (linguagem) => {
    switch (linguagem) {
      case 'javascript':
        alert('JavaScript é amplamente utilizado para desenvolvimento web e móvel, bem como para automação de servidores.');
        break;
      case 'php':
        alert('PHP é uma linguagem de script usada principalmente para desenvolvimento web, especialmente para criação de páginas dinâmicas. Ela fica no lado do servidor.');
        break;
      case 'csharp':
        alert('C# é uma linguagem de programação desenvolvida pela Microsoft e é amplamente utilizada para desenvolvimento de aplicativos Windows, jogos e aplicativos empresariais.');
        break;
      default:
        break;
    }
  };

  const handlePressMateria = (linguagem) => {
    switch (linguagem) {
      case 'javascript':
        alert('JavaScript é aprendido em Interfaces Web II e Desenvolvimento de Dispositivos Móveis.');
        break;
      case 'php':
        alert('PHP é aprendido em Sistemas Web I.');
        break;
      case 'csharp':
        alert('C# é apenas um exemplo, não temos uma matéria que nos ensine essa linguagem.');
        break;
      default:
        break;
    }
  };

  const handlePressEmpresa = (linguagem) => {
    switch (linguagem) {
      case 'javascript':
        alert('O Google Maps foi desenvolvido em JS!');
        break;
      case 'php':
        alert('O Facebook foi escrito inicialmente em código PHP.');
        break;
      case 'csharp':
        alert('O sistema operacional Windows foi desenvolvido em C# (Csharp).');
        break;
      default:
        break;
    }
  };
  const handlePressLinha = (linguagem) => {
    switch (linguagem) {
      case 'python':
        alert('Essa é Python, uma linguagem utilizada no Back-End.');
        break;
      case 'kotlin':
        alert('Essa é kotlin, uma linguagem utilizada no desenvolvimento de apps para o sistema Android.');
        break;
      case 'swift':
        alert('Ao contrário da anterior, a linguagem swift é utilizada no desenvolvimento de apps para o sistema IOS.');
        break;
      case 'typescript':
        alert("Esse é o typescript, muito utilizado no Front-End. Porém, pode ser utilizado no Back-End com Node.");
        break;
      case 'ruby':
        alert("Essa é Ruby, uma linguagem conhecida por sua sintaxe clara e expressiva.")
        break;
      default:
        break;
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', alignItems: "center" }}>
      <StatusBar />
      <View style={{ backgroundColor: '#007bff', padding: 20, alignItems: 'center', width: '100%', flexDirection: "row" }}>
        {/*<Icon name="arrow-left" size={20} color="white"/>*/}
        <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold', marginLeft: 50 }}>
          Onde essas linguagens são utilizadas?
        </Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
        <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: '#FFF000', margin: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }} onPress={() => handlePressLinguagem('javascript')}>
          <Image source={js} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: '#4B0082', margin: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }} onPress={() => handlePressLinguagem('php')}>
          <Image source={php} style={{ width: 95, height: '70%' }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 100, margin: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }} onPress={() => handlePressLinguagem('csharp')}>
          <Image source={csharp} style={{ width: '100%', height: '100%' }} />
        </TouchableOpacity>
      </View>
      <View style={{ width: '100%', backgroundColor: '#007bff', height: 50, position: 'relative', marginTop: 20 }}>
        <Text style={{ textAlign: 'center', color: '#fff', fontSize: 15, fontWeight: 'bold', marginTop: 10 }}>Em quais matérias aprendemos cada linguagem?</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
        <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: '#FFF000', margin: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }} onPress={() => handlePressMateria('javascript')}>
          <Image source={js} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: '#4B0082', margin: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }} onPress={() => handlePressMateria('php')}>
          <Image source={php} style={{ width: 95, height: '70%' }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 100, margin: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }} onPress={() => handlePressMateria('csharp')}>
          <Image source={csharp} style={{ width: '100%', height: '100%' }} />
        </TouchableOpacity>
      </View>
      <View style={{ width: '100%', backgroundColor: '#007bff', height: 50, position: 'relative', marginTop: 20 }}>
        <Text style={{ textAlign: 'center', color: '#fff', fontSize: 15, fontWeight: 'bold', marginTop: 15 }}>Site ou sistemas que utilizam tal linguagem:</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
        <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: '#FFF000', margin: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }} onPress={() => handlePressEmpresa('javascript')}>
          <Image source={js} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: '#4B0082', margin: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }} onPress={() => handlePressEmpresa('php')}>
          <Image source={php} style={{ width: 95, height: '70%' }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 100, margin: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }} onPress={() => handlePressEmpresa('csharp')}>
          <Image source={csharp} style={{ width: '100%', height: '100%' }} />
        </TouchableOpacity>
      </View>
      <View style={{ width: '100%', backgroundColor: '#007bff', height: 50, position: 'relative', marginTop: 10, flexDirection: "row", justifyContent: "space-around" }}>
        <Text style={{ textAlign: 'center', color: '#fff', fontSize: 17, fontWeight: 'bold', marginTop: 15 }}>Veja mais linguagens:</Text>
        {/*<Icon name="arrow-right" size={20} color="#fff" style={{marginTop:15}}/>*/}
      </View>
      <ScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1, }} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: 90, height: 90, margin: 10, backgroundColor: '#fff' }} onPress={() => handlePressLinha('python')}>
          <Image source={require("./assets/python.png")} style={{ width: '100%', height: '100%' }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: 90, height: 90, margin: 10, backgroundColor: '#fff' }} onPress={() => handlePressLinha('kotlin')}>
          <Image source={require("./assets/kotlin.png")} style={{ width: '100%', height: '100%' }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: 90, height: 90, margin: 10, backgroundColor: '#fff' }} onPress={() => handlePressLinha('swift')}>
          <Image source={require("./assets/swift.png")} style={{ width: '100%', height: '100%' }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: 90, margin: 10, height: 90, backgroundColor: '#fff' }} onPress={() => handlePressLinha('typescript')}>
          <Image source={require("./assets/typescript.png")} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: 90, margin: 10, height: 90, backgroundColor: '#fff' }} onPress={() => handlePressLinha('ruby')}>
          <Image source={require("./assets/ruby.png")} style={{ width: '100%', height: '100%' }} />
        </TouchableOpacity>
      </ScrollView>
      <View style={{ width: '100%', backgroundColor: "#007bff", height: 50, position: 'fixed', bottom: 0, justifyContent: 'space-around', flexDirection: "row" }}>
        <Icon name="home" size={35} color="#fff" style={{ marginTop: 5 }} />
        <Icon name="folder" size={35} color="#fff" style={{ marginTop: 5 }} />
        <Icon name="user" size={35} color="#fff" style={{ marginTop: 5 }} />
      </View>
    </SafeAreaView>
  );
}