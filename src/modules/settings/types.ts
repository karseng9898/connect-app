import { User } from '@src/graphql/user.graphql';

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
}
