import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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
              <Ionicons name={item.icon as keyof typeof Ionicons.glyphMap} size={30} color="Black" />
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
              <Ionicons name={item.icon as keyof typeof Ionicons.glyphMap} size={30} color="Black" />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    elevation: 2,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  section: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    elevation: 1,
  },
  cardContent: {
    marginLeft: 12,
  },
  cardText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  cardTime: {
    fontSize: 12,
    color: '#555',
    marginTop: 4,
  },
});

export default NotificationPage;