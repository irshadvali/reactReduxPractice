import { StyleSheet, Platform } from "react-native";
import Dimensions from "Dimensions";
const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 0 : 20,
    flexDirection: "column",
    backgroundColor: "#F5FCFF"
  },
  headerContainer: {
    width: DEVICE_WIDTH,
    height: 80,
    flexDirection: "column",
    backgroundColor: "#194786",
    borderBottomColor: "#F0F0F0",
    borderBottomWidth: 0.5
  },
  headerSubContainer: {
    flexDirection: "row"
  },
  headerTxt: {
    alignItems: "center",
    paddingTop: 10
  },
  menuImgBtn: {
    width: 40,
    height: 40,
    left: 5
  },
  logoImg: {
    left: 20,
    padding: 15,
    top: 5
  },
  callImg: {
    width: 40,
    height: 40,
    marginLeft: 200
  },
  backImgView: {
    height: 80,
    flexDirection: "row",
    backgroundColor: "#194786",
    borderBottomColor: "#F0F0F0",
    borderBottomWidth: 0.5,
    left: 15
  },
  menuImgView: {
    height: 80,
    flexDirection: "row",
    backgroundColor: "#194786",
    borderBottomColor: "#F0F0F0",
    borderBottomWidth: 0.5
  },
  postButton: {
    margin: 10,
    padding: 15,
    backgroundColor: "#E66006",
    alignItems: "center"
  },
  postBtnTxt: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold"
  },
  dbCityListItem: {
    flexDirection: "row"
  },
  locationImg: {
    width: 40,
    height: 40,
    left: 5,
    top: 5
  },
  dbCityListTxt: {
    width: 140,
    color: "black",
    fontSize: 16,
    padding: 15
  },
  dbCityLableTxt: {
    fontSize: 12,
    padding: 10,
    marginLeft: 10
  },
  dbCityCircleView: {
    height: 35,
    width: 35,
    borderRadius: 60,
    backgroundColor: "#6B1B89",
    marginTop: 10
  },
  dbCityCircleTxt: {
    color: "white",
    marginTop: 8,
    marginLeft: 10
  },
  dbCityNextArrow: {
    width: 50,
    height: 40,
    left: 5,
    top: 10
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0
  },
  footerBids: {
    flex: 1,
    flexDirection: "row",
    height: 70,
    backgroundColor: "#194786",
    alignItems: "center"
  },
  footerFleets: {
    flex: 1,
    flexDirection: "row",
    height: 70,
    backgroundColor: "#0a50a1",
    alignItems: "center"
  },
  footerAccounts: {
    flex: 1,
    flexDirection: "row",
    height: 70,
    backgroundColor: "#2362AA",
    alignItems: "center"
  },
  footerNotification: {
    flex: 1,
    flexDirection: "row",
    height: 70,
    backgroundColor: "#366BAF",
    alignItems: "center"
  },
  footerImg: {
    height: 70,
    width: 90
  },
  line: {
    height: 15,
    backgroundColor: "black",
    top: 3,
    width: 1,
    bottom: 0,
    marginLeft: 5
  },
  lineview: {
    height: 35,
    backgroundColor: "#4d4d4d",
    top: 0,
    width: 1,
    bottom: 0,
    marginLeft: 5
  },
  citydetail_container: {
    flex: 1
  },
  citydetailListmain: {
    flex: 1,
    height: 70,
    flexDirection: "row"
  },
  partOne: {
    flex: 0.25,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center"
  },
  partTwo: {
    flex: 0.737,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    paddingLeft: 10
  },
  partThree: {
    flex: 0.003,
    backgroundColor: "#e6e6e6"
  },
  citydetailTexcolorbold: {
    color: "#333"
  },
  slideContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFFFFF"
  },
  slideSection: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderColor: "#e9e9e9"
  },
  slideInputWrapper: {
    margin: 5,
    padding: 5
  },
  slideLabel: {
    color: "black",
    fontSize: 15,
    paddingRight: 16,
    left: 50,
    alignItems: "center"
  },
  slideinLineImg: {
    position: "absolute",
    width: 35,
    height: 35
  },
  slideLeftTop: {
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DEDEDE"
  },
  NotificationListView: {
    flex: 1,
    backgroundColor: "#DEDEDE",
    margin: 1
  },
  list_content: {
    flexDirection: "column",
    justifyContent: "space-between",
    borderBottomColor: "#e9e9e9",
    borderBottomWidth: 0.5,
    paddingBottom: 10
  },
  backImg: {
    width: 30,
    height: 30,
    left: 5,
    top: 10
  },
  logoImg: {
    left: 20,
    padding: 15,
    top: 5
  },
  toolBarView: {
    alignItems: "center",
    paddingTop: 10,
    paddingRight: 50
  },
  fadeBtnStyle: {
    height: 60,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: "#e9e9e9"
  },
  loaderStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  viewStyle:{
    height: 2, backgroundColor: "#e6e6e6"
  },
  line: {
    height: 15,
    backgroundColor: "black",
    top: 3,
    width: 1,
    bottom: 0,
    marginLeft: 5
  },
});
export default Styles;
