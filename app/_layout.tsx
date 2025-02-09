import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      {/* Hide the status bar */}
      {/* <StatusBar hidden={true} /> */}
      <StatusBar backgroundColor="#000" />
      
      {/* Main Stack Navigator */}
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#ff0000" }, // Header background (if shown)
          headerTintColor: "#fff", // Header text/icon color
          headerTitleStyle: { fontWeight: "bold" }, // Header title styling
          headerShown: false, // Completely hide the header
        }}
      >
         <Stack.Screen name="page/LoadingScreen/LoadingScreen" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
