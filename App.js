import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import feed from './assets/data/feed';
import 'react-native-gesture-handler';
import Router from './src/navigation/Router';


const feed1 = feed[0];
export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    <Router />
    </>
  );
}

