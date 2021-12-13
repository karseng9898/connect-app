import { StyleSheet } from 'react-native';

export const chatsScreenStyle = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  itemTextContainer: {
    marginLeft: 10,
    paddingVertical: 5,
    flex: 1,
  },
  itemNameTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemName: {
    fontSize: 18,
  },
  itemTime: {
    color: '#555',
  },
  itemContent: {
    color: '#555',
  },
});
