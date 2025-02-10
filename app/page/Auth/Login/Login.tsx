import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./Login.styles";
import { useRouter } from "expo-router";
import Constants from "@/app/config/constants";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    console.log("Login clicked with", { email, password });
    // Navigate to the home tab
    router.push("/page/MainStructure/Main");
  };

  const handleRegister = () => {
    router.push("/page/Auth/Register/Register");
  };
0
  return (
    <View style={styles.container}>
      {/* blue Upper Area */}
      <View style={styles.redArea}>
        <Image
          source={Constants.assets.logo}
          style={styles.logo}
        />
        <Text style={styles.brandText}>Smart Postman</Text>
      </View>

      {/* Form Area */}
      <View style={styles.formArea}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subTitle}>
          Hey, enter your details to sign in to your account
        </Text>

        {/* Username/Email Input */}
        <Text style={styles.formAreaText}>Username/Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username/email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        {/* Password Input */}
        <Text style={styles.formAreaText}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Login Button */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login In</Text>
        </TouchableOpacity>

        {/* New Button to Navigate to Test Page */}
        {/* <TouchableOpacity style={styles.button} onPress={() => router.push("/page/Test/TestPage")}>
          <Text style={styles.buttonText}>Go to Test Page</Text>
        </TouchableOpacity> */}

        <Text style={styles.helpText}>Having trouble in sign in?</Text>
        <Text style={styles.footerText}>
          Don’t have an account? <Text style={styles.signUpText} onPress={handleRegister}>Sign up now</Text>
        </Text>
      </View>
    </View>
  );
}
