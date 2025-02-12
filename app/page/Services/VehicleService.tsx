import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Platform, StyleSheet } from "react-native";
import { router, useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

const CarRepairBooking = () => {
  const [name, setName] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [repairPlace, setRepairPlace] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleConfirm = () => {
    console.log({
    
    });
  };

  const handleService = () => {
    router.push("/page/MainStructure/Main");
  };

  const handleReset = () => {
    setName("");
    setServiceType("");
    setRepairPlace("");
    setAdditionalInfo("");
    setDate(new Date());
  };

  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <Ionicons name="arrow-back" size={24} color="#000" onPress={handleService}/>
      <Text style={styles.headerTitle}>Car Service</Text>
    </View>

      {/* Name Input */}
      <View style={styles.formArea}>
      <Text style={styles.formAreaText}>Your Vehicle</Text>
      <TextInput
        style={styles.input}
        placeholder="ex: Toyota Aqua"
        value={name}
        onChangeText={setName}
      />

      {/* Date & Time Picker */}
      <Text style={styles.formAreaText}>Select Date & Time</Text>
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
        <Text>{date.toDateString()}</Text>
      </TouchableOpacity>

      {/* Repair Place */}
      <Text style={styles.formAreaText}>Choose the place to fix your car here</Text>
      <TextInput
        style={styles.input}
        placeholder="Engine"
        value={repairPlace}
        onChangeText={setRepairPlace}
      />

      {/* Additional Information */}
      <Text style={styles.formAreaText}>Other information's let know</Text>
      <TextInput
        style={styles.tinput}
        value={additionalInfo}
        onChangeText={setAdditionalInfo}
        multiline
      />

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={{ color: "#000" }}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.confirmButton} onPress={handleService}>
          <Text style={{ color: "#fff" }}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  );
};

const styles = StyleSheet.create ( {
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
    backgroundColor: '#F7F7F7',
  },
  formArea: {
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    elevation: 2,
    marginBottom: 20
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 150,
  },
  formAreaText: {
    padding: 5,
    fontWeight: "bold",
    fontFamily: "popins-bold",
  },
  buttonContainer: {
    flexDirection: "row" as "row",
    justifyContent: "space-between",
    marginTop: 320,
  },
  resetButton: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    width: "45%",
    alignItems: "center" as const,
  },
  tinput: {
    width: "100%",
    height: 100,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: -60,
    marginTop: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  confirmButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    width: "45%",
    alignItems: "center",
  },
});

export default CarRepairBooking;
