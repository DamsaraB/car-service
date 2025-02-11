import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginTop: "15%",
    fontFamily: "popins-bold",
  },
  subTitle: {
    fontSize: 30,
    color: "#0098FF",
    textAlign: "center",
    marginBottom: -15,
    fontFamily: "ABeeZee",
    paddingHorizontal: 80,
    paddingVertical: 25,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  tab: {
    fontSize: 16,
    color: "#aaa",
    marginHorizontal: 10,
  },
  activeTab: {
    fontSize: 16,
    color: "#D32F2F",
    fontWeight: "bold",
    marginHorizontal: 10,
    textDecorationLine: "underline",
  },
  formArea: {
    paddingHorizontal: 40,
  },
  formAreaText: {
    padding: 5,
    fontWeight: "bold",
    fontFamily: "popins-bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    backgroundColor: "#f9f9f9",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  checkboxText: {
    color: "#333",
    marginLeft: 8,
  },
  linkText: {
    color: "#0098FF",
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "#0098FF",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  helpText: {
    fontSize: 14,
    color: "#555",
    marginVertical: 10,
    textAlign: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
  signUpText: {
    color: "#0098FF",
    fontWeight: "bold",
  },
});

export default styles;
