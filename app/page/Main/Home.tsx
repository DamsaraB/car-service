import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {  TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';

export const Home = () => {
  return (
    <ScrollView style={styles.container}>
    {/* Header */}
    <View style={styles.header}>
  <View style={styles.headerTop}>
    <View>
      <Text style={styles.greeting}>Hello, Good Morning!</Text>
      <Text style={styles.userName}>Kushan Karunarathna</Text>
    </View>
    <MaterialIcons name="person-pin" size={35} color="white" />
  </View>

  <View style={styles.searchContainer}>
    <Ionicons name="search" size={25} color="#999" style={styles.searchIcon} />
    <TextInput placeholder="What are you looking for..." style={styles.searchInput} />
  </View>
</View>
     
    {/* Services Section */}
    <View style={styles.servicesSection}>
      <Text style={styles.servicesTitle}>Our Services</Text>
      <View style={styles.serviceCard}>
        <Image source={{ uri: 'https://source.unsplash.com/300x200/?car-repair' }} style={styles.serviceImage} />
        <Text style={styles.serviceText}>WITH 100% ACCURACY On Car Repairs</Text>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>BOOK NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
    
    {/* Categories Section */}
    <View style={styles.categoriesSection}>
      <Text style={styles.sectionTitle}>Popular Categories</Text>
      <View style={styles.categoryContainer}>
        <View style={styles.categoryCard}>
          <FontAwesome5 name="car" size={25} color="black" />
          <Text>Car Repair</Text>
        </View>
        <View style={styles.categoryCard}>
          <FontAwesome5 name="bicycle" size={25} color="black" />
          <Text>Bike Repair</Text>
        </View>
        <View style={styles.categoryCard}>
          <FontAwesome5 name="cogs" size={25} color="black" />
          <Text>Auto Parts</Text>
        </View>
      </View>
    </View>
    
    {/* Chat Assistant */}
    <View style={styles.chatAssistant}>
      <Text style={styles.chatTitle}>Chat With our Assistant</Text>
      <Text style={styles.chatText}>We're here to help! Describe your issue or ask a question.</Text>
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatButtonText}>Start</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
);
};

const styles = StyleSheet.create({
container: { 
  flex: 1, 
  backgroundColor: '#F5F5F5' },
header: { 
  padding: 20, 
  backgroundColor: '#0096FF' },
headerTop: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between' 
  },
greeting: { 
  color: '#fff', 
  fontSize: 14 },
userName: { 
  color: '#fff', 
  fontSize: 16, 
  fontWeight: 'bold' },
searchContainer: { 
  flexDirection: 'row', 
  backgroundColor: '#fff', 
  padding: 2, 
  margin: 20, 
  borderRadius: 10 },
searchIcon: { 
  marginRight: 6,
  marginTop: 6,
  marginLeft: 5 },
searchInput: { 
  flex: 1 },
servicesSection: { 
  padding: 20 },
servicesTitle: { 
  fontSize: 18, 
  fontWeight: 'bold' },
serviceCard: { 
  backgroundColor: '#fff', 
  padding: 15, 
  borderRadius: 10, 
  marginTop: 10 },
serviceImage: { 
  width: '100%', 
  height: 150, 
  borderRadius: 10 },
serviceText: { 
  marginTop: 10, 
  fontSize: 16, 
  fontWeight: 'bold' },
bookButton: { backgroundColor: '#007BFF', 
  padding: 10, 
  borderRadius: 5, 
  marginTop: 10, 
  alignItems: 'center' },
bookButtonText: { 
  color: '#fff', 
  fontWeight: 'bold' },
categoriesSection: { 
  padding: 20 },
sectionTitle: { 
  fontSize: 18, 
  fontWeight: 'bold' },
categoryContainer: { 
  flexDirection: 'row', 
  justifyContent: 'space-around', 
  marginTop: 10 },
categoryCard: { 
  alignItems: 'center', 
  backgroundColor: '#fff', 
  padding: 10, 
  borderRadius: 75, 
  width: 75 },
chatAssistant: { 
  backgroundColor: '#FFD700', 
  padding: 20, 
  margin: 20, 
  borderRadius: 10, 
  alignItems: 'center' },
chatTitle: { 
  fontSize: 16, 
  fontWeight: 'bold' },
chatText: { 
  textAlign: 'center', 
  marginTop: 5 },
chatButton: { 
  backgroundColor: '#007BFF', 
  padding: 10, 
  borderRadius: 5, 
  marginTop: 10 },
chatButtonText: { 
  color: '#fff', 
  fontWeight: 'bold' },
});


export default Home;
