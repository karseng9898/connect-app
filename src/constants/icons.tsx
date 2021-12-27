import ProfileAvatar from '../../assets/icons/profile-avatar.svg';

interface ICON_PROPS {
  name: ICON_NAMES;
  component: any;
}
export const ICONS: ICON_PROPS[] = [
  {
    name: 'profile-avatar',
    component: ProfileAvatar,
  },
];

export type ICON_NAMES = 'profile-avatar' | '';
