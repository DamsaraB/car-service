import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function Index() {
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
