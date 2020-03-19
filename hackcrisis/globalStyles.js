import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: '#ebf2ff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  innerContainer: {
    width: '90%',
    marginTop: Platform.OS === 'ios' ? 0 : '10%',
    paddingBottom: 40,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#344356',
    textAlign: 'center',
    width: '100%',
  },
  header: {
    fontSize: 20,
    color: '#344356',
    textAlign: 'center',
    lineHeight: 34,
    opacity: 0.8,
  },
  label: {
    color: '#344356',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  smallText: {
    color: '#344356',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
});

export default styles;
