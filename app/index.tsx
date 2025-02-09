import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  // return (
  //   <View
  //     style={{
  //       flex: 1,
  //       justifyContent: "center",
  //       alignItems: "center",
  //       backgroundColor: "#fff",
  //     }}
  //   >
  //     <Text style={{ fontSize: 20, color: "#ff0000", fontWeight: "bold" }}>
  //       Welcome to My App
  //     </Text>
  //   </View>
  // );

  const router = useRouter();

  useEffect(() => {
    // Delay the navigation to allow the layout to mount first
    const timer = setTimeout(() => {
      router.replace("/page/LoadingScreen/LoadingScreen");
    }, 100); 

    return () => clearTimeout(timer); // Clean up the timeout on unmount
  }, [router]);
  return null;
}
