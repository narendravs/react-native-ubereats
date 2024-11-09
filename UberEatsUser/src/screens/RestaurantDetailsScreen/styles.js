import { StyleSheet } from "react-native";
export default StyleSheet.create({
  page: {
    flex: 1,
  },

  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  iconContainer: {
    position: "absolute",
    top: 15,
    left: 0,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 15,
    color: "grey",
  },
  container: {
    marginVertical: 10,
    margin: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  menuTitle: {
    marginHorizontal: 10,
    fontSize: 20,
    fontWeight: "400",
    letterSpacing: 0.75,
  },
  button: {
    backgroundColor: "black",
    alignItems: "center",
    marginTop: "auto",
    padding: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
});
