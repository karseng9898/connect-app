export interface SettingSectionListDataType {
  title: string;
  data: SettingDataType[];
}
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
}
