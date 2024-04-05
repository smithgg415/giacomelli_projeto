import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';

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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center' }}>
      <View style={{ backgroundColor: '#007bff', padding: 20, alignItems: 'center', width: '100%' }}>
        <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}>Onde essas linguagens são utilizadas?</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
        <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: '#FFF000', margin: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }} onPress={() => handlePressLinguagem('javascript')}>
          <Image source={require("./assets/js.png")} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: '#4B0082', margin: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }} onPress={() => handlePressLinguagem('php')}>
          <Image source={require("./assets/php.png")} style={{ width: 95, height: '70%' }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: '#007bff', margin: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }} onPress={() => handlePressLinguagem('csharp')}>
          <Image source={require("./assets/c.png")} style={{ width: '100%', height: '100%' }} />
        </TouchableOpacity>
      </View>
      <View style={{ width: '100%', backgroundColor: '#007bff', height: 50, position: 'relative', marginTop: 20 }}>
        <Text style={{ textAlign: 'center', color: '#fff', fontSize: 15, fontWeight: 'bold', marginTop: 10 }}>Em quais matérias aprendemos cada linguagem?</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
        <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: '#FFF000', margin: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }} onPress={() => handlePressMateria('javascript')}>
          <Image source={require("./assets/js.png")} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: '#4B0082', margin: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }} onPress={() => handlePressMateria('php')}>
          <Image source={require("./assets/php.png")} style={{ width: 95, height: '70%' }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: '#007bff', margin: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }} onPress={() => handlePressMateria('csharp')}>
          <Image source={require("./assets/c.png")} style={{ width: '100%', height: '100%' }} />
        </TouchableOpacity>
      </View>
      <View style={{ width: '100%', backgroundColor: '#007bff', height: 50, position: 'relative', marginTop: 20 }}>
        <Text style={{ textAlign: 'center', color: '#fff', fontSize: 15, fontWeight: 'bold', marginTop: 15 }}>Site ou sistemas que utilizam tal linguagem:</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
        <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: '#FFF000', margin: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }} onPress={() => handlePressEmpresa('javascript')}>
          <Image source={require("./assets/js.png")} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: '#4B0082', margin: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }} onPress={() => handlePressEmpresa('php')}>
          <Image source={require("./assets/php.png")} style={{ width: 95, height: '70%' }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: '#007bff', margin: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }} onPress={() => handlePressEmpresa('csharp')}>
          <Image source={require("./assets/c.png")} style={{ width: '100%', height: '100%' }} />
        </TouchableOpacity>
      </View>
      <View style={{ width: '100%', backgroundColor: '#007bff', height: 50, position: 'absolute', bottom: 0, justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center', color: '#fff', fontSize: 15, fontWeight: 'bold' }}>Smith Programações</Text>
      </View>
    </SafeAreaView>
  );
}