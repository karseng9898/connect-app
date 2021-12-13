export type AppStackNavigationParam = {
  AuthScreens:
    | {
        screen?: 'AuthMenuScreen' | 'RegisterScreen' | 'LoginScreen';
      }
    | undefined;
  HomeScreens: undefined;
  ChatsRoomScreen: {
    chatRoomId: string;
  };
};

export type AuthStackNavigationParam = {
  AuthMenuScreen: undefined;
  RegisterScreen: undefined;
  LoginScreen: undefined;
};

export type HomeTabNavigationParam = {
  ChatsScreens: undefined;
  SettingsScreens: undefined;
  ContactsScreen: undefined;
  FeedsScreen: undefined;
};

export type ChatStackNavigationParam = {
  ChatsScreen: undefined;
};

export type SettingsStackNavigationParam = {
  SettingsScreen: undefined;
};

export type FeedStackNavigationParam = {
  FeedsScreen: undefined;
};
