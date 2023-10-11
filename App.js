import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppRotas from './src/rotas/AppRotas';
import Principal from './src/templates/Principal/Principal'



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="inverted"
        backgroundColor='black' />
      <Principal />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});
