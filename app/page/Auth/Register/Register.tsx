import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./Register.styles";
import Constants from "@/app/config/constants";
import { useRouter } from "expo-router";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const router = useRouter();

  const handleRegister = () => {
    console.log("Register clicked", { name, email, password, confirmPassword, isTermsAccepted });
    router.push("/page/MainStructure/Main");
  };
  const handleLogin = () => {
    router.push("/page/Auth/Login/Login");
  };

  return (
    <View style={styles.container}>
      {/* Welcome Header */}
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subTitle}>Let’s help you to easier your garaje booking</Text>



      {/* Form Area */}
      <View style={styles.formArea}>
        {/* Name Input */}
        <Text style={styles.formAreaText}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="ex: Kushan"
          placeholderTextColor="#aaa"
          value={name}
          onChangeText={setName}
        />

        {/* Email Input */}
        <Text style={styles.formAreaText}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="ex: kushan7@email.com"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        {/* Password Input */}
        <Text style={styles.formAreaText}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="********"
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Confirm Password Input */}
        <Text style={styles.formAreaText}>Confirm password</Text>
        <TextInput
          style={styles.input}
          placeholder="********"
          placeholderTextColor="#aaa"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        {/* Terms and Privacy Checkbox */}
        <View style={styles.checkboxContainer}>
          {/* <CheckBox
            value={isTermsAccepted}
            onValueChange={setIsTermsAccepted}
          /> */}
          <Text style={styles.checkboxText}>
            I agree to the <Text style={styles.linkText}>Terms & Privacy</Text>
          </Text>
        </View>

        {/* Register Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleRegister}
          // disabled={!isTermsAccepted}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.helpText}>Having trouble in Register?</Text>
        <Text style={styles.footerText}>
          Alreay have an account? <Text style={styles.signUpText} onPress={handleLogin}> Log in now</Text>
        </Text>
      </View>
    </View>
  );
}
