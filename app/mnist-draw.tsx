import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Svg, Path } from 'react-native-svg'; // Used for drawing the digit
import { BarChart } from 'react-native-chart-kit';

// Utility function to convert drawing into an image (base64)
const generateImageFromPath = (path: string) => {
  // Convert the drawing into a base64 image if needed for prediction
  return `data:image/svg+xml;base64,${Buffer.from(path).toString('base64')}`;
};

export default function MNISTDraw() {
  const [drawingPath, setDrawingPath] = useState<string>('');
  const [result, setResult] = useState<{ prediction: string; probabilities: number[] } | null>(null);
  const router = useRouter();

  // Handle drawing events
  const startDrawing = (e: any) => {
    setDrawingPath((prevPath) => prevPath + `M${e.nativeEvent.locationX},${e.nativeEvent.locationY}`);
  };

  const continueDrawing = (e: any) => {
    setDrawingPath((prevPath) => prevPath + `L${e.nativeEvent.locationX},${e.nativeEvent.locationY}`);
  };

  const endDrawing = () => {
    // Optionally handle when drawing ends
  };

  const handlePredict = async () => {
    if (!drawingPath) {
      Alert.alert('Error', 'Please draw a digit.');
      return;
    }

    try {
      // Convert the SVG path to a base64-encoded string
      const imageBase64 = generateImageFromPath(drawingPath);

      // Make the POST request to the 'predict2' endpoint with the base64 string
      const response = await fetch('https://karpathy.free.beeceptor.com/predict2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: imageBase64, // Send base64 string in the JSON body
        }),
      });

      const ct = response.headers.get('content-type') || '';
      if (ct.includes('application/json')) {
        const data = await response.json();
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
      Alert.alert('Error', 'Prediction failed.');
      setResult({
        prediction: '0',
        probabilities: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
      });
    }
  };

  const clearDrawing = () => {
    setDrawingPath('');
    setResult(null);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.button}>
        <Text style={styles.buttonText}>⬅ Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Draw a Digit</Text>

      <Svg
        width="400"
        height="400"
        style={styles.drawingArea}
        onStartShouldSetResponder={(e) => true}
        onMoveShouldSetResponder={(e) => true}
        onResponderMove={continueDrawing}
        onResponderGrant={startDrawing}
        onResponderRelease={endDrawing}
      >
        <Path d={drawingPath} fill="none" stroke="black" strokeWidth={5} />
      </Svg>

      <TouchableOpacity style={styles.button} onPress={handlePredict}>
        <Text style={styles.buttonText}>Predict</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={clearDrawing}>
        <Text style={styles.buttonText}>Clear</Text>
      </TouchableOpacity>

      {result && (
        <View style={styles.result}>
          <Text style={styles.resultText}>Prediction: {result.prediction}</Text>

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "white",
  },
  drawingArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    color:"black",
    backgroundColor: 'white',
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
  result: {
    marginTop: 30,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
  },
  chart: {
    marginTop: 10,
    borderRadius: 12,
    alignSelf: 'center',
  },
});
