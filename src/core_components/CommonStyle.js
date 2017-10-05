import { StyleSheet } from "react-native";
import Dimensions from "Dimensions";
const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

const CommonStyle = StyleSheet.create({
  headerText: {
    color: "#666666",
    fontSize: 12
  },
  valueText: {
    color: "#000000",
    fontSize: 15
  },
  marginTOP: {
    marginTop: 10
  },
  leftContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  slideinputWrapper: {
    margin: 5,
    padding: 5
  },
  slidelabel: {
    color: "black",
    fontSize: 15,
    paddingRight: 16,
    left: 50,
    alignItems: "center"
  },
  slideinlineImg: {
    position: "absolute",
    width: 35,
    height: 35
  },
    rowDirectionContainer: {
    flexDirection: "row",
  },

  listButton:{
    fontSize: 12,
    height: 25,
    borderRadius: 5,
    backgroundColor: '#8BC34A',
    color: 'white',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,

  }
});
export default CommonStyle;
