import { StyleSheet } from "react-native";

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

export default styles;