import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Entypo } from "@expo/vector-icons";
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from './assets/data/feed';

const feed1 = feed[0];
export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    <SafeAreaView>
    {/* <HomeScreen/> */} 
      <Post 
      post={post1}
      />
    </SafeAreaView>
    </>
  );
}

