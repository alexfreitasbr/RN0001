import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    gap: 10,
    backgroundColor: "#fff",

    paddingTop: 60,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  containerInput: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  textInput: {
    flex: 1,
    borderRadius: 8,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  button: {
    borderRadius: 20,
    backgroundColor: "red",
  },

  listContainer: {
    flex: 1,
    backgroundColor: "lightgray",
    paddingBottom: 10,
    
  },

  scrollView: {
    flex: 1,
    flexDirection:"column",
    padding: 10,
  },

  listItem: {
    flexDirection: "row",

    justifyContent: "center",
    alignItems: "center",
  },

  itemTitle: {
    flex: 1,
    color: "red",
    marginBottom:30,
  },
});