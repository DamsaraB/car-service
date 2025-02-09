import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, GestureResponderEvent } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Test1 from "../Main/test1";
import Test2 from "../Main/test2";
import Test3 from "../Main/test3";
import Test4 from "../Main/NotificationPage";
import Test5 from "../Main/Settings";
import { Ionicons } from "@expo/vector-icons";

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();
function CustomTabBarButton({ children, onPress }: { children: any; onPress?: (event: GestureResponderEvent) => void }) {
  return (
    <TouchableOpacity
      style={styles.customButtonContainer}
      onPress={onPress}
    >
      <View style={styles.customButton}>{children}</View>
    </TouchableOpacity>
  );
}

export default function App() {
  return (
    // <NavigationContainer>
    // <Tab.Navigator
    //   screenOptions={{
    //     tabBarStyle: { backgroundColor: "#fff" },
    //     tabBarActiveTintColor: "#007AFF",
    //     tabBarInactiveTintColor: "#8e8e8f",
    //     headerShown: false,
    //   }}
    // >
    //   <Tab.Screen name="Test1" component={Test1} />
    //   <Tab.Screen name="Test2" component={Test2} />
    //   <Tab.Screen name="Test3" component={Test3} />
    //   <Tab.Screen name="Test4" component={Test4} />
    //   <Tab.Screen name="Test5" component={Test5} />
    // </Tab.Navigator>
    <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#DAF0FF",
            height: "7%",
            position: "absolute",
            borderTopWidth: 0,
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#0098FF",
          tabBarInactiveTintColor: "#8e8e8f",
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Test1"
          component={Test1}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="home-outline" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Test2"
          component={Test2}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="location-outline" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Middle"
          component={Test3} // Middle screen
          options={{
            tabBarIcon: () => (
              <Ionicons name="add" size={32} color="white" allingItems="center" />
            ),
            tabBarButton: (props) => (
              <CustomTabBarButton {...props} />
            ),
          }}
        />
        <Tab.Screen
          name="Test4"
          component={Test4}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="notifications-outline" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Test5"
          component={Test5}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="settings-outline" size={30} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  text: {
    fontSize: 20,
    color: "#000",
  },
  customButtonContainer: {
    top: -25,
    justifyContent: "center",
    alignItems: "center",
  },
  customButton: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: "#0098FF",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#fff",
    paddingBottom: 2,
  },
});
