import React, { FC, useState } from 'react';
import { Icon } from 'react-native-elements';

interface IconProps {
  color: string;
  size: number;
}
export const MailIcon: FC<IconProps> = ({ color, size }) => (
  <Icon
    type="feather"
    name="mail"
    color={color}
    size={size}
    tvParallaxProperties={undefined}
  />
);

export const LockIcon: FC<IconProps> = ({ color, size }) => (
  <Icon
    type="feather"
    name="lock"
    color={color}
    size={size}
    tvParallaxProperties={undefined}
  />
);

export const PersonIcon: FC<IconProps> = ({ color, size }) => (
  <Icon
    type="ionicon"
    name="person-outline"
    color={color}
    size={size}
    tvParallaxProperties={undefined}
  />
);

export const NameIcon: FC<IconProps> = ({ color, size }) => (
  <Icon
    type="antdesign"
    name="idcard"
    color={color}
    size={size}
    tvParallaxProperties={undefined}
  />
);

export const ShowHidePassword: FC<
  IconProps & { onPress: (value: boolean) => void }
> = ({ color, size, onPress }) => {
  const [show, setShow] = useState(false);
  const name = show ? 'eye-off-outline' : 'eye-outline';

  return (
    <Icon
      type="ionicon"
      name={name}
      color={color}
      size={size}
      tvParallaxProperties={undefined}
      onPress={() => {
        onPress(show);
        setShow(!show);
      }}
    />
  );
};
