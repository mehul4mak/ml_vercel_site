import { View, Text, StyleSheet } from "react-native";

export default function EnquirePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>📩 Enquire</Text>
      <Text style={styles.text}>You can send me an enquiry using this page.</Text>
      <Text style={styles.text}>Form integration coming soon!</Text>
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
