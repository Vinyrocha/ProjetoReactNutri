import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopBar from './components/TopBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NavigationBar from './components/NavigationBar';


function App() {
  
    
  const handleBackPress = () => {
    console.log('Back button pressed');
  };

  const handleCheckPress = () => {
    console.log('Check button pressed');
  };



  return ( 
    <SafeAreaProvider>  
      <View style={styles.container}>
        <TopBar 
          title="Adicionar plano de treino"
          onBackPress={handleBackPress}
          onCheckPress={handleCheckPress}
        />
      </View>
      <NavigationBar />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },
});

export default App;
