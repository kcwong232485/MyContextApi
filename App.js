//import './App.css';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import { ContextProvider } from './components/MyProvider';
//import { ContextProvider2 } from './components/MyProvider';
import { View, StyleSheet } from 'react-native';

// https://www.reactjstutorials.com/react-context/4/react-create-context

function App() {
  return (
    <View style="styles.container">
      <About />      
      <ContextProvider>      
        <Home />
        <Home />        
        <Profile />
      </ContextProvider>
    </View>

  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
    borderColor: 'blue',
    borderWidth: 2,
    marginTop: 10,
    marginBottom: 5,
  },
});