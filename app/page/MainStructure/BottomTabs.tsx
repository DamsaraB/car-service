import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

export default function BottomTabs() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          // Ensure iconName matches valid Ionicons names
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case "../Home/Home":
              iconName = "home";
              break;
            case "../Auth/Profile/Profile":
              iconName = "person";
              break;
            default:
              iconName = "ellipse"; // Fallback icon
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "#fff" },
      })}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
