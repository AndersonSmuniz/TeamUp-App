import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppRotas from './src/rotas/LoginRotas';
import TabBarRotas from './src/rotas/TabBarRotas';
import CadastrarPartida from './src/templates/CriarPartida/CadastarPartida';

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar style="inverted"
        backgroundColor='black' />
      <AppRotas />
    </SafeAreaView>
  );
}

