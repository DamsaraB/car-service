import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router, useRouter } from "expo-router";

const Settings = () => {
  const handleLogin = () => {
    router.push("/page/Auth/Login/Login");
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          style={styles.profileImage}
          source={{
            uri: "https://cdn.discordapp.com/attachments/1322923439950139483/1331121513918631988/Screenshot_20250107_095936_TikTok.jpg?ex=67907703&is=678f2583&hm=daa5200187e3e21314afed0ef6548db70856509e92f74241b2e0f71910733c14&", // Replace with user's image URL
          }}
        />
        <TouchableOpacity style={styles.editIcon}>
          <Ionicons name="pencil-outline" size={16} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.userName}>User name</Text>
        <Text style={styles.userInfo}>user@gmail.com | +94 77 xxx xxxx</Text>
      </View>

      {/* Options Section */}
      <View style={styles.optionsSection}>
        <OptionItem icon="person-outline" text="Add profile information" />
        <OptionItem
          icon="notifications-none"
          text="Notifications"
          extraText="ON"
        />
        <OptionItem icon="language" text="Language" extraText="English" />
        <OptionItem icon="lock-outline" text="Security" onPress={handleLogin} />
        <OptionItem icon="brightness-6" text="Theme" extraText="Light mode" />
      </View>

      {/* Support Section */}
      <View style={styles.optionsSection}>
        <OptionItem icon="help-outline" text="Help & Support" />
        <OptionItem icon="email" text="Contact us" />
        <OptionItem icon="policy" text="Privacy policy" />
        <OptionItem icon="info-outline" text="about" />
      </View>
    </ScrollView>
  );
};

const OptionItem = ({ icon, text, extraText, onPress }: { icon: any; text: any; extraText?: any; onPress?: () => void }) => (
  <TouchableOpacity style={styles.optionItem} onPress={onPress}>
    <MaterialIcons name={icon} size={24} color="#000" />
    <View style={styles.optionTextContainer}>
      <Text style={styles.optionText}>{text}</Text>
      {extraText && <Text style={styles.extraText}>{extraText}</Text>}
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  profileSection: {
    alignItems: "center",
    paddingVertical: 24,
    backgroundColor: "#f9f9f9",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIcon: {
    position: "absolute",
    top: 95,
    right: 160,
    backgroundColor: "#000",
    borderRadius: 15,
    padding: 4,
  },
  userName: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  userInfo: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  optionsSection: {
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  optionTextContainer: {
    flex: 1,
    marginLeft: 16,
  },
  optionText: {
    fontSize: 16,
    color: "#000",
  },
  extraText: {
    fontSize: 14,
    color: "#888",
  },
});

export default Settings;
