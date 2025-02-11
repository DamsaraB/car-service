import { useRouter } from "expo-router";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, ActivityIndicator } from "react-native";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const storeUserDataAndNavigate = async () => {
      // Extract query parameters
      const params = new URLSearchParams(window.location.search);
      const customerId = params.get('userId'); 
      const customerEmail = params.get('email');
      const customerName = params.get('name');

      if (customerId && customerEmail) {
        try {
          // Store user information in AsyncStorage
          await AsyncStorage.setItem('customerId', customerId);
          await AsyncStorage.setItem('customerEmail', customerEmail);
          //await AsyncStorage.setItem('customerName', customerName);

          // Navigate to home screen
          router.replace("/page/LoadingScreen/LoadingScreen");
        } catch (error) {
          console.error("Error storing user data:", error);
        }
      } else {
        // Navigate directly if no query parameters
        router.replace("/page/LoadingScreen/LoadingScreen");
      }
    };

    storeUserDataAndNavigate();
  }, [router]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text>Loading...</Text>
    </View>
  );
}
