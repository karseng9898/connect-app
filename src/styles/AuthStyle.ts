import { StyleSheet } from 'react-native';

export const authStyles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  button: {
    marginVertical: 8,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
  },
});

export const loginStyles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 20,
  },
  divider: {
    marginBottom: 12,
    marginHorizontal: -20,
  },
  content: {
    flex: 1,
  },
});
