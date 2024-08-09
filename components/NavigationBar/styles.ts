import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: '#E1E8ED',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#dcdcdc',
    position: 'absolute',
    bottom: 0,
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  label: {
    fontSize: 12,
    color: '#7a7a7a',
    marginTop: 4,
  },
  activeLabel: {
    color: '#007aff',
  },
  activeIcon: {
    tintColor: '#007aff',
  },
});

export default styles;
