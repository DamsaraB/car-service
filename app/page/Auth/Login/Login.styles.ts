import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  redArea: {
    backgroundColor: "#0098FF",
    height: "40%",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
  },
  brandText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  formArea: {
    flex: 1,
    padding: 20,
    //alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0098FF",
    marginBottom: 10,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginBottom: 20,
  },
  formAreaText: {
    padding: 5,
    fontWeight: "bold",
    fontFamily: "popins-bold",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#0098FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 15,
    marginTop: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  helpText: {
    fontSize: 14,
    color: "#555",
    marginVertical: 10,
    textAlign: "center",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 5,
    height: 45,
  },
  passwordInput: {
    flex: 1,
    fontSize: 14,
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