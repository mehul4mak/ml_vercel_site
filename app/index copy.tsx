

  import React from "react";
import { Text, View, ScrollView, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";  // Import useRouter from expo-router for navigation

export default function Index() {
  const router = useRouter();

  const projects = [
    {
      id: "1",
      title: "MNIST Digit Recognition",
      description: "Leveraged CNNs for accurate handwritten digit classification.",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/27/MnistExamples.png",
      route: "/mnist", // 🔥 Add this
    },
    {
      id: "2",
      title: "Pedestrian Detection with Object Detection",
      description: "Implemented real-time pedestrian detection using YOLOv4.",
      image: "https://miro.medium.com/v2/resize:fit:1024/0*OCDDRB_CMbGmv9y6.png",
    },
    {
      id: "3",
      title: "Emotion Detection System",
      description: "Developed a system to identify emotions from facial expressions.",
      image: "https://www.softwebsolutions.com/wp-content/uploads/2023/07/emotion-recognition-using-Azure-Cognitive.png",
    },
    {
      id: "4",
      title: "Human Pose Estimation",
      description: "Implemented pose estimation techniques to track body movements.",
      image: "https://cloudester.com/wp-content/uploads/2024/05/pose.png",
    },
    {
      id: "5",
      title: "Data Annotation Pipeline",
      description: "Designed a pipeline for efficient dataset annotation.",
      image: "https://fiverrbox.com/wp-content/uploads/2022/09/Capture-c40fb76b.png",
    },
    {
      id: "6",
      title: "Text-to-Image Generation",
      description: "Created models to generate images from textual descriptions.",
      image: "https://static-cse.canva.com/blob/1152049/ArticleBannerTexttoImage.png",
    },
    {
      id: "7",
      title: "Matrix Like Image Conversion",
      description: "Convert image to matrix movie like theme.",
      image: "https://cdn.arstechnica.net/wp-content/uploads/2024/03/ascii-art-hacker.jpg",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#0a0a0a" }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Advanced ML Solutions</Text>
          <Text style={styles.subtitle}>
            Curated selection of real-world Machine Learning & Vision applications.
          </Text>
        </View>

        <View style={styles.tilesContainer}>
          {projects.map((project) => (
            <TouchableOpacity
              key={project.id}
              onPress={() => router.push(project.route)}  // Navigate to MNIST page
              style={styles.card}
            >
              <Image source={{ uri: project.image }} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{project.title}</Text>
              <Text style={styles.cardDesc}>{project.description}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    marginBottom: 30,
    marginTop:30,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#aaa",
    textAlign: "center",
    paddingHorizontal: 10,
  },
  tilesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#222",
    borderRadius: 16,
    margin: 10,
    padding: 16,
    width: 280,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  cardImage: {
    width: "100%",
    height: 160,
    borderRadius: 12,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
  },
  cardDesc: {
    fontSize: 13,
    color: "#bbb",
    marginTop: 4,
  },
});
