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
    color: "#A60606",
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "ABeeZee",
    paddingHorizontal: 80,
    paddingVertical: 25,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
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
    marginBottom: 15,
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
    color: "#D32F2F",
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "#A60606",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    // alignItems: "center",
    // marginTop: 30,
    // borderTopWidth: 1,
    // borderTopColor: "#ddd",
    // paddingTop: 20,
    position: "absolute",
    width: "auto",
    height: "12%",
    left: 0,
    bottom: 0,
    backgroundColor: "#A60606",
    shadowColor: "rgba(59, 89, 152, 0.27)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 114,
  },
  footerLogo: {
    marginTop: -50,
    width: 180,
    height: 180,
    resizeMode: "contain",
    opacity: 0.5,
    //marginBottom: 10,
  },
  footerText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
    fontSize: 12,
    marginTop: -85,
    paddingHorizontal: 80,
  },
});

export default styles;
