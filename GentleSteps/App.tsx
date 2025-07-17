import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginScreen from './src/LoginScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <LoginScreen />
    </SafeAreaProvider>
  );
};

export default App;
