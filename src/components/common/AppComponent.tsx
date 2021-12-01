import React, { FC } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

export const HideKeyboard: FC = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
