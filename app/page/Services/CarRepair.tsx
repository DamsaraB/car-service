import React, { useState } from "react";
import { 
  View, Text, TextInput, TouchableOpacity, Alert, StyleSheet 
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker"; // ✅ Correct Date Picker
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";

const CarRepairBooking = () => {
  const router = useRouter();
  const [bookingDate, setBookingDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [jobDescription, setJobDescription] = useState("");
  const [placeToFix, setPlaceToFix] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const API_URL = "http://192.168.43.59:8080";

  const handleConfirm = async () => {
    try {
      const customerId = await AsyncStorage.getItem("customerId");
      if (!customerId) {
        Alert.alert("Error", "User not logged in");
        return;
      }

      await axios.post(`${API_URL}/api/appointments`, {
        bookingDate: bookingDate.toISOString(), // ✅ Correct format for MySQL
        jobDescription,
        placeToFix,
        serviceType,
        vehicleType,
        appointmentStatus: "pending",
        jobStatus: "pending",
        customer: { id: customerId },
      });

      Alert.alert("Success", "Appointment booked successfully!");
      router.push("/page/Services/Confirm");
    } catch (error) {
      Alert.alert("Error", "Failed to book appointment.");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#000" onPress={() => router.push("/page/Main/Services")} />
        <Text style={styles.headerTitle}>Repair Service</Text>
      </View>

      {/* Form Area */}
      <View style={styles.formArea}>
        <Text style={styles.formAreaText}>Your Vehicle</Text>
        <TextInput style={styles.input} placeholder="Toyota Aqua" value={vehicleType} onChangeText={setVehicleType} />

        <Text style={styles.formAreaText}>Select Date & Time</Text>
        <TouchableOpacity style={styles.input} onPress={() => setDatePickerVisibility(true)}>
          <Text>{bookingDate.toLocaleString()}</Text>
        </TouchableOpacity>

        {/* Date Picker Modal */}
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="datetime"
          onConfirm={(date) => {
            setDatePickerVisibility(false);
            setBookingDate(date);
          }}
          onCancel={() => setDatePickerVisibility(false)}
        />

        <Text style={styles.formAreaText}>Choose the place to fix your car</Text>
        <TextInput style={styles.input} placeholder="Engine" value={placeToFix} onChangeText={setPlaceToFix} />

        <Text style={styles.formAreaText}>Service Type</Text>
        <TextInput style={styles.input} placeholder="Regular Service / Repair" value={serviceType} onChangeText={setServiceType} />

        <Text style={styles.formAreaText}>Other information</Text>
        <TextInput style={styles.tinput} placeholder="Describe the issue..." value={jobDescription} onChangeText={setJobDescription} multiline />

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
            <Text style={{ color: "#fff" }}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    backgroundColor: "#f9f9f9",
  },
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  formArea: {
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    elevation: 2,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginRight: 150,
  },
  formAreaText: {
    padding: 5,
    fontWeight: "bold",
    fontFamily: "popins-bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  confirmButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  tinput: {
    width: "100%",
    height: 100,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    marginTop: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
});

export default CarRepairBooking;
