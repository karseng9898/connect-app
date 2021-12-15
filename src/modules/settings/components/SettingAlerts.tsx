import { Alert } from 'react-native';

export const logoutConfirmationAlert = (onPress: () => void) =>
  Alert.alert('Logout', 'Are you sure you want to log out?', [
    {
      text: 'Yes',
      onPress,
      style: 'destructive',
    },
    {
      text: 'No',
      style: 'cancel',
    },
  ]);
