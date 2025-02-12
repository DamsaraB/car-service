import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import styles from "./Login.styles";
import { useRouter } from "expo-router";
import Constants from "@/app/config/constants";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const API_URL = "http://192.168.43.59:8080";

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/login/local`, {
        email,
        password,
      });

      // Store customer information in AsyncStorage
      await AsyncStorage.setItem("customerId", response.data.id.toString());
      //await AsyncStorage.setItem("customerName", response.data.firstName);
      await AsyncStorage.setItem("customerEmail", response.data.email);

      Alert.alert("Success", "Login successful!");
      router.push("/page/MainStructure/Main"); // Navigate to the main page
    } catch (error) {
      Alert.alert("Error", "Login failed!");
    }
  };

  const handleRegister = () => {
    router.push("/page/Auth/Register/Register");
  };

  return (
    <View style={styles.container}>
      <View style={styles.redArea}>
        <Image source={Constants.assets.logo} style={styles.logo} />
        <Text style={styles.brandText}>Smart Postman</Text>
      </View>

      <View style={styles.formArea}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subTitle}>
          Hey, enter your details to sign in to your account
        </Text>

        <Text style={styles.formAreaText}>Username/Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username/email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.formAreaText}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login In</Text>
        </TouchableOpacity>

        <Text style={styles.helpText}>Having trouble in sign in?</Text>
        <Text style={styles.footerText}>
          Don’t have an account?{" "}
          <Text style={styles.signUpText} onPress={handleRegister}>
            Sign up now
          </Text>
        </Text>
      </View>
    </View>
  );
}