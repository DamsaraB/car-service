import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { router, useRouter } from "expo-router";
import Constants from "../../config/constants";

const ConfirmationScreen = () => {
  const handleHome = () => {
        router.push("/page/MainStructure/Main");
      };

  return (
    <View style={styles.container}>
      {/* Animated Checkmark */}
      <View style={styles.imageContainer}>
        <Image
          source={Constants.assets.confirm} // Place the GIF in the assets folder
          style={styles.gif}
        />
      </View>

      {/* Text Confirmation */}
      <Text style={styles.title}>Your Booking is Added!</Text>
      <Text style={styles.subtitle}>
        We will arrange your date as soon as possible
      </Text>

      {/* Back to Home Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleHome}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 20,
  },
  imageContainer: {
    width: 150,
    height: 150,
    backgroundColor: "#f1f1f1",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  gif: {
    width: 100,
    height: 100,
  },
  lottie: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#2ECC71",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ConfirmationScreen;
