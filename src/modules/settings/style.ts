import { StyleSheet } from 'react-native';

export const settingListHeaderStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 12,
    flexDirection: 'row',
    borderBottomWidth: 0.3,
    borderColor: 'lightgray',
  },
  avatarStyle: {
    borderWidth: 0.7,
    borderColor: '#333',
  },
  textContainer: {
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  name: {
    marginBottom: 6,
  },
});
