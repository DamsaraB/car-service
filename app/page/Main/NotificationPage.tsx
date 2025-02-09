import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from "./CSS/NotificationPage.styles";
import { useRouter } from "expo-router";

const NotificationPage = () => {
    const router = useRouter();
  const notifications = {
    new: [
      {
        id: 1,
        icon: 'car-outline',
        text: 'Your booking accepted we are here for you now...',
        time: '12:41 PM, 09 January 2025',
      },
    ],
    older: [
      {
        id: 2,
        icon: 'person-outline',
        text: 'You create profile successfully...',
        time: '12:00 PM, 09 January 2025',
      },
    ],
  };

  const handleBack = () => {
    router.push("../Main/test1");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#000" onPress={handleBack}/>
        <Text style={styles.headerTitle}>Notification</Text>
        <Ionicons name="notifications-outline" size={24} color="#000" />
      </View>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>New</Text>
          {notifications.new.map((item) => (
            <TouchableOpacity key={item.id} style={styles.card}>
              <Ionicons name={item.icon as keyof typeof Ionicons.glyphMap} size={30} color="#FF6961" />
              <View style={styles.cardContent}>
                <Text style={styles.cardText}>{item.text}</Text>
                <Text style={styles.cardTime}>{item.time}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Older</Text>
          {notifications.older.map((item) => (
            <TouchableOpacity key={item.id} style={styles.card}>
              <Ionicons name={item.icon as keyof typeof Ionicons.glyphMap} size={30} color="#FF6961" />
              <View style={styles.cardContent}>
                <Text style={styles.cardText}>{item.text}</Text>
                <Text style={styles.cardTime}>{item.time}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default NotificationPage;