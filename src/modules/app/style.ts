import { StyleSheet } from 'react-native';

export const searchUserInputStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderColor: 'lightgray',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: 'lightgray',
  },
  input: {
    flex: 1,
  },
});

export const addUserCardStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatarContainer: {
    borderWidth: 0.7,
    borderColor: 'lightgray',
  },
  rightContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    marginLeft: 12,
  },
  textContainer: {
    flex: 1,
    alignSelf: 'flex-start',
    paddingTop: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: '500',
  },
});

export const cardContainerStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 12,
    padding: 12,
  },
});

export const searchUserContentStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const searchUserInitialViewStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    color: 'lightgray',
  },
});

export const noUserFoundCardStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'gray',
    marginLeft: 8,
  },
});
