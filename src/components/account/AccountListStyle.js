import { StyleSheet } from "react-native";
import Dimensions from "Dimensions";
const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

const AccountListStyle = StyleSheet.create({
  itemRow: {
    flexDirection: "row"
  },
  rowImg: {
    width: 35,
    height: 25
  },

  containerAcc: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 5
  },
  texColor: {
    color: "#333"
  },
  accountListViewContainer: {
    flex: 1,
    paddingTop: 0
  },
  accountsLoaderStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default AccountListStyle;
