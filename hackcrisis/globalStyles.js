import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebf2ff',
    alignItems: 'center',
  },
  innerContainer: {
    width: '90%',
    marginTop: '10%',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#344356',
    textAlign: 'center',
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
    fontSize: 20,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 25,
  },
});

export default styles;
