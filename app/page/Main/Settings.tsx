import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import styles from "./CSS/Settings.styles";

const Settings = () => {
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
        <OptionItem icon="lock-outline" text="Security" />
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

const OptionItem = ({ icon, text, extraText }: { icon: any; text: any; extraText?: any }) => (
  <TouchableOpacity style={styles.optionItem}>
    <MaterialIcons name={icon} size={24} color="#000" />
    <View style={styles.optionTextContainer}>
      <Text style={styles.optionText}>{text}</Text>
      {extraText && <Text style={styles.extraText}>{extraText}</Text>}
    </View>
  </TouchableOpacity>
);

export default Settings;
