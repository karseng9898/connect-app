import { User } from '@src/graphql/user.graphql';
import { SettingsMenuScreenNavType } from '@src/navigations/types/navigationType';

export interface SettingDataType {
  name: string;
}

export interface SettingItemProps {
  onPress: () => void;
  index: number;
  iconType: string;
  iconName: string;
  iconColor: string;
  name: string;
  haveIndicator?: boolean;
}

export interface SettingListHeaderProps {
  user: User | null;
  navigation: SettingsMenuScreenNavType;
}
