import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router'; // Use expo-router for navigation
import * as ImagePicker from 'expo-image-picker';
import { BarChart } from 'react-native-chart-kit';

export default function MNIST() {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [result, setResult] = useState<{ prediction: string; probabilities: number[] } | null>(null);
  const router = useRouter(); // useRouter from expo-router for navigation
  
  // Ask permission (only on native)
  useEffect(() => {
    if (Platform.OS !== 'web') {
      ImagePicker.requestMediaLibraryPermissionsAsync().then(({ status }) => {
        if (status !== 'granted') {
          Alert.alert('Permission needed', 'We need access to your photos.');
        }
      });
    }
  }, []);

  const pickImage = async () => {
    setResult(null);
    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      base64: false,
    });
    if (!res.canceled) {
      setImageUri(res.assets[0].uri);
    }
  };

  const handlePredict = async () => {
    if (!imageUri) return;
    try {
      const formData = new FormData();
      formData.append('file', {
        uri: imageUri,
        name: 'mnist.jpg',
        type: 'image/jpeg',
      } as any);

      const resp = await fetch('https://karpathy.free.beeceptor.com/predict', {
        method: 'POST',
        body: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      const ct = resp.headers.get('content-type') || '';
      if (ct.includes('application/json')) {
        const data = await resp.json();
        if (
          data.prediction != null &&
          Array.isArray(data.probabilities) &&
          data.probabilities.length === 10
        ) {
          setResult(data);
        } else {
          throw new Error('Invalid JSON shape');
        }
      } else {
        throw new Error('Non-JSON response');
      }
    } catch (e) {
      console.error(e);
      Alert.alert(
        'Error',
        'Prediction failed or invalid response – showing mock result.'
      );
      setResult({
        prediction: '7',
        probabilities: [0.01, 0.02, 0.05, 0.03, 0.02, 0.07, 0.01, 0.75, 0.03, 0.01],
      });
    }
  };

  const SmallButton = ({ title, onPress }: { title: string; onPress: () => void }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SmallButton title="⬅ Back" onPress={() => router.back()} />

      <View style={styles.spacer} />
      
      {/* Button for routing */}
      <SmallButton title="Go to MNIST Draw" onPress={() => router.push('/mnist-draw')} />

      <SmallButton title="Upload Image" onPress={pickImage} />

      {imageUri && (
        <>
          <Image source={{ uri: imageUri }} style={styles.image} resizeMode="contain" />
          <SmallButton title="Predict" onPress={handlePredict} />
        </>
      )}

      {result && (
        <View style={styles.result}>
          <Text style={styles.resultText}>Prediction: {result.prediction} and Confidence: {result.probabilities[result.prediction]}</Text>

          <BarChart
            data={{
              labels: [...Array(10).keys()].map(String),
              datasets: [{ data: result.probabilities.map((p) => p * 100) }],
            }}
            width={Dimensions.get('window').width * 0.8}
            height={220}
            fromZero
            yAxisSuffix="%"
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 0,
              color: () => 'blue',
              labelColor: () => '#444',
              propsForBackgroundLines: { stroke: '#ccc' },
            }}
            style={styles.chart}
          />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  spacer: {
    height: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
    borderRadius: 8,
  },
  result: {
    marginTop: 30,
    alignItems: 'center',
    color:"black",

  },
  resultText: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color:'white'
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  chart: {
    marginTop: 10,
    borderRadius: 12,
    alignSelf: 'center',
  },
});
