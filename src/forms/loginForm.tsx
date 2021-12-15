import { LockIcon, MailIcon, TextInput } from '@src/modules/app';
import { composeValidators, minLength, required } from '@utils';
import { Field } from 'formik';
import React, { FC } from 'react';
import { ScrollView } from 'react-native';

export const LoginForm: FC = () => {
  const DrawingConstant = {
    iconSize: 20,
    iconColor: 'gray',
  };

  return (
    <ScrollView>
      <Field
        name="usernameOrEmail"
        placeholder="username / email"
        autoCorrect={false}
        component={TextInput}
        validate={composeValidators(required)}
        leftIcon={
          <MailIcon
            size={DrawingConstant.iconSize}
            color={DrawingConstant.iconColor}
          />
        }
      />
      <Field
        name="password"
        placeholder="password"
        type="password"
        autoCorrect={false}
        component={TextInput}
        validate={composeValidators(required, minLength(6))}
        leftIcon={
          <LockIcon
            size={DrawingConstant.iconSize}
            color={DrawingConstant.iconColor}
          />
        }
      />
    </ScrollView>
  );
};
