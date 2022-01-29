import { Platform, StyleSheet } from 'react-native';

export const messageInputStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 10,
    backgroundColor: 'white',
  },
  inputBoxContainer: {
    flex: 1,
    borderWidth: 0.3,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === 'ios' ? 12 : 0,
    maxHeight: 80,
  },
  inputBox: {
    marginHorizontal: 8,
  },
  sendButton: {
    marginLeft: 8,
    marginBottom: 8,
  },
});
