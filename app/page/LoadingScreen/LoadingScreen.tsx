import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { useRouter } from "expo-router";
import styles from "./LoadingScreen.styles";
import Constants from "../../config/constants";

export default function LoadingScreen() {
  const [randomTip, setRandomTip] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Select a random tip on component mount
    const randomIndex = Math.floor(Math.random() * tips.length);
    setRandomTip(tips[randomIndex]);

    // Navigate to login screen after 3 seconds
    const timer = setTimeout(() => {
      router.push("/page/Auth/Login/Login"); // Adjust the path if needed
    }, 3000);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* App Logo */}
      <Image
        source={Constants.assets.loading}
        style={styles.loading}
      />

      {/* App Name */}
      <Text style={styles.appName}>Auto Slot</Text>
      <Text style={styles.subText}>by UnrealLabs Co.</Text>

      {/* Random Tip */}
      <Text style={styles.tip}>{randomTip}</Text>
    </View>
  );
}

const tips = [
  "Track your packages in real-time!",
  "Schedule deliveries at your convenience.",
  "Stay updated with delivery notifications.",
  "Easily manage returns and exchanges.",
  "Get rewards for using Smart Postman!",
];
