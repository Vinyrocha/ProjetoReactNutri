import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  safearea: {
    backgroundColor: '#E1E8ED',
    padding: 0
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    margin: 0
  },
  title: {
    color: '#3C3C3C',
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    width: 52,
    height: 52,
  },
  iconButton: {
    padding: 10,
  },
});

export default styles;
