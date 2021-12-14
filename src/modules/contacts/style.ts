import { StyleSheet } from 'react-native';

export const contactItemStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  name: {
    marginLeft: 12,
    fontSize: 18,
  },
});

export const contactSectionHeaderStyle = StyleSheet.create({
  container: {
    paddingLeft: 12,
    paddingVertical: 3,
    fontWeight: '500',
    backgroundColor: '#eee',
  },
});
