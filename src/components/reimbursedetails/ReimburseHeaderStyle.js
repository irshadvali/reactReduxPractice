import { StyleSheet } from 'react-native';

const ReimburseHeaderStyle = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    marginLeft: 5,
    marginBottom: 5,
    marginRight: 5,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    borderRadius: 7,

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#d00000',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textcolorthree: {
    color: '#333333',
  },

  userListContainer: {
    flexDirection: 'row',
  },
  centerView:{
    flex: 1,
    flexDirection: 'row',
    textAlign: 'center',
  },
  headerText: {
    height: 25,
    borderRadius: 12,
    backgroundColor: '#5472dd',
    textAlign: 'center',
    alignSelf: 'center',
    color: '#ffffff',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 12,
  },

});
export default ReimburseHeaderStyle;