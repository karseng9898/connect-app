export type AppStackNavigationParam = {
  AuthScreens:
    | {
        screen?: 'AuthMenuScreen' | 'RegisterScreen' | 'LoginScreen';
      }
    | undefined;
  HomeScreens: undefined;
};

export type AuthStackNavigationParam = {
  AuthMenuScreen: undefined;
  RegisterScreen: undefined;
  LoginScreen: undefined;
};

export type HomeTabNavigationParam = {
  ChatsScreens: undefined;
  SettingsScreens: undefined;
};

export type ChatStackNavigationParam = {
  ChatsScreen: undefined;
  ChatsRoomScreen: undefined;
};
