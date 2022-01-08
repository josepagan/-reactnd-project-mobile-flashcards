// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './app/store/store';
import DeckListScreen from './app/screens/DeckListScreen';
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DeckListScreen />
      </PersistGate>
    </Provider>
  )
}

