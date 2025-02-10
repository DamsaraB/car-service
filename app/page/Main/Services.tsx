import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

const Services = () => {
  const services = [
    { id: 1, name: 'Car Repair', icon: 'car' },
    { id: 2, name: 'Bike Repair', icon: 'bicycle' },
    { id: 3, name: 'Car Wash', icon: 'cogs' },
    { id: 4, name: 'Auto Parts', icon: 'tools' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#000"/>
        <Text style={styles.headerTitle}>Services</Text>
        <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
      </View>
      
      {/* Services List */}
      <View style={styles.servicesList}>
        {services.map((service) => (
          <View key={service.id} style={styles.serviceCard}>
            <FontAwesome5 name={service.icon} size={30} color="black" style={styles.serviceIcon} />
            <View style={styles.serviceInfo}>
              <Text style={styles.serviceName}>{service.name}</Text>
              <Text style={styles.serviceDescription}>Book a time & date\time repair your car</Text>
              <Text style={styles.bookNow}>Book Now</Text>
            </View>

            <Text style={styles.serviceRating}></Text>
            <TouchableOpacity style={styles.arrowButton}>
              <FontAwesome5 name="arrow-circle-right" size={30} color="black" />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F5F5F5' },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: 15, 
    backgroundColor: '#fff' },
  headerTitle: { 
    fontSize: 20, 
    fontWeight: 'bold' },
  searchIcon: { 
    marginRight: 10 },
  servicesList: { 
    padding: 15 },
  serviceCard: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#fff', 
    padding: 30, 
    borderRadius: 10, 
    marginBottom: 10, 
    shadowColor: '#000', 
    shadowOpacity: 0.1, 
    shadowRadius: 5, 
    elevation: 3 },
  serviceIcon: { 
    marginRight: 15 },
  serviceInfo: { 
    flex: 1 },
  serviceName: { 
    fontSize: 16, 
    fontWeight: 'bold' },
  serviceDescription: { 
    color: '#777', 
    fontSize: 12 },
  bookNow: { 
    color: '#007BFF', 
    fontWeight: 'bold', 
    marginTop: 5 },
  serviceRating: { 
    fontSize: 14, 
    fontWeight: 'bold', 
    marginRight: 10 },
  arrowButton: { 
    padding: 8, 
    backgroundColor: '#E5E5E5', 
    borderRadius: 20 },
});


export default Services;
