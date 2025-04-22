import { View, Text, StyleSheet } from "react-native";

export default function ContactPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>📞 Contact Me</Text>
      <Text style={styles.text}>Mehul Kumawat</Text>
      <Text style={styles.text}>✉️ mehul@example.com</Text>
      <Text style={styles.text}>📱 +91-1234567890</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    padding: 20,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    marginVertical: 5,
  },
});
