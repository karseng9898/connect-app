import React from 'react';
import _ from 'lodash';
import { ICONS, ICON_NAMES } from '../../../constants/icons';
import { SvgProps } from 'react-native-svg';

interface IconProps extends SvgProps {
  name: ICON_NAMES;
  width?: number;
  height?: number;
}
const Icon = (props: IconProps) => {
  const hasIcon = _.find(ICONS, { name: props.name });

  if (hasIcon) {
    const Comp = hasIcon.component;
    return <Comp width={props.width} height={props.height} {...props} />;
  }
  return null;
};

export { Icon };
export default Icon;
