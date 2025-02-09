import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // white background
  },
  loading: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000", // black text for the app name
    marginBottom: 10,
  },
  subText: {
    fontSize: 14,
    color: "#888",
  },
  tip: {
    fontSize: 16,
    color: "#fff",
    fontStyle: "italic",
    textAlign: "center",
    paddingHorizontal: 20,
    marginTop: 10,
  },
});

export default styles;
