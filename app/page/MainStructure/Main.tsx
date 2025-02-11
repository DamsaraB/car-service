import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, GestureResponderEvent } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import Home from "../Main/Home";
import Test2 from "../Main/Services";
import Test3 from "../Main/Chat";
import Test4 from "../Main/NotificationPage";
import Test5 from "../Main/Settings";
import { AntDesign, Ionicons } from "@expo/vector-icons";

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
          name="Home"
          component={Home}
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
              <MaterialIcons name="local-grocery-store" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Middle"
          component={Test3} 
          options={{
            tabBarIcon: () => (
              <AntDesign name="wechat" size={25} color="white" allingItems="center"/>
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
