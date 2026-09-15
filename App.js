import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Blaze-X Mobile</Text>
        <Text style={styles.subtitle}>Base APK Successfully Compiled!</Text>
        <Text style={styles.text}>Ready for streaming API integration.</Text>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a', // Dark theme matching Blaze-X
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#38bdf8',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#f8fafc',
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    color: '#94a3b8',
  },
});
