import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { router, useRouter } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Services = () => {

const handleCar = () => {
      router.push("/page/Services/CarRepair");
    };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#000" onPress={() => router.push("/page/MainStructure/Main")} />
        <Text style={styles.headerTitle}>Services</Text>
        <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
      </View>
      
      {/* Services List */}
      <ScrollView style={styles.subcontainer}>

      <Text style={styles.cardHeadTitle}>Repairs</Text>

      <View style={styles.card}>
        <Icon name="car" size={30} color="#000" style={styles.cardIcon} />
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>Car Repair</Text>
          <Text style={styles.cardSubtitle}>Repair your car</Text>
          <Text style={styles.cardAction} onPress={handleCar}>Book Now</Text>
        </View>
        <TouchableOpacity style={styles.arrowButton}>
          <Icon name="arrow-right" size={20} color="#000" onPress={handleCar}/>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <MaterialCommunityIcons name="motorbike" size={40} color="#000" style={styles.cardIcon} />
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>Motor Bike Repair</Text>
          <Text style={styles.cardSubtitle}>Repair your Bike</Text>
          <Text style={styles.cardAction} onPress={handleCar}>Book Now</Text>
        </View>
        <TouchableOpacity style={styles.arrowButton}>
          <Icon name="arrow-right" size={20} color="#000" onPress={handleCar} />
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <MaterialIcons name="electrical-services" size={40} color="#000" style={styles.cardIcon} />
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>Eletric Vehicle Repair</Text>
          <Text style={styles.cardSubtitle}>Repair your Bike</Text>
          <Text style={styles.cardAction} onPress={handleCar}>Book Now</Text>
        </View>
        <TouchableOpacity style={styles.arrowButton}>
          <Icon name="arrow-right" size={20} color="#000" onPress={handleCar}/>
        </TouchableOpacity>
      </View>

      <Text style={styles.cardHeadTitle}>Service</Text>

      <View style={styles.card}>
        <Icon name="wrench" size={30} color="#000" style={styles.cardIcon} />
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>Repairs & Maintainance</Text>
          <Text style={styles.cardSubtitle}>Book a time & date to repair your car</Text>
          <Text style={styles.cardAction}>Book Now</Text>
        </View>
        <TouchableOpacity style={styles.arrowButton}>
          <Icon name="arrow-right" size={20} color="#000" />
        </TouchableOpacity>
      </View>

          <Text style={styles.cardHeadTitle}>Auto-Parts</Text>

      <View style={styles.card}>
        <MaterialIcons name="production-quantity-limits" size={30} color="#000" style={styles.cardIcon} />
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>Auto Parts </Text>
          <Text style={styles.cardSubtitle}>you can purchase auto parts your vehicle</Text>
        </View>
        <TouchableOpacity style={styles.arrowButton}>
          <Icon name="arrow-right" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      </ScrollView>
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
    fontSize: 22, 
    fontWeight: 'bold' },
  searchIcon: { 
    marginRight: 10 },
  subcontainer: {
    paddingHorizontal: 10,
    marginTop: 5
    },
    icon: {
      marginRight: 15,
    },
    card: {
      paddingHorizontal: 20,
      backgroundColor: "#fff",
      flexDirection: "row",
      alignItems: "center",
      padding: 15,
      borderRadius: 15,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 5,
      marginBottom: 10,
    },
    cardIcon: {
      marginRight: 15,
    },
    cardText: {
      flex: 1,
    },
    cardHeadTitle: {
      fontSize: 20,
      marginBottom: 5,
      marginTop: 10,
      fontWeight: "bold",
    },
    cardTitle: {
      fontSize: 17,
      fontWeight: "bold",
    },
    cardSubtitle: {
      color: "#666",
      fontSize: 12,
    },
    cardAction: {
      fontSize: 14,
      fontWeight: "bold",
      color: "#000",
      marginTop: 5,
    },
    arrowButton: {
      padding: 10,
    },

});


export default Services;
