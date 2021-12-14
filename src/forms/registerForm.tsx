import { MailIcon, PersonIcon, NameIcon, LockIcon } from '@components';
import {
  alphaNumeric,
  composeValidators,
  confirmPassword,
  email,
  minLength,
  required,
} from '@utils';
import { Field } from 'formik';
import React, { FC } from 'react';
import { ScrollView, TextInput } from 'react-native';

export const RegisterForm: FC<{
  values: {
    email: string;
    username: string;
    name: string;
    password: string;
    confirmPassword: string;
  };
}> = ({ values: { password } }) => {
  const DrawingConstant = {
    iconSize: 20,
    iconColor: 'gray',
  };

  return (
    <ScrollView>
      <Field
        name="email"
        placeholder="email"
        autoCorrect={false}
        component={TextInput}
        validate={composeValidators(required, email)}
        leftIcon={
          <MailIcon
            size={DrawingConstant.iconSize}
            color={DrawingConstant.iconColor}
          />
        }
      />
      <Field
        name="username"
        placeholder="username"
        autoCorrect={false}
        component={TextInput}
        validate={composeValidators(required, alphaNumeric)}
        leftIcon={
          <PersonIcon
            size={DrawingConstant.iconSize}
            color={DrawingConstant.iconColor}
          />
        }
      />
      <Field
        name="name"
        placeholder="name"
        autoCorrect={false}
        component={TextInput}
        validate={composeValidators(required, alphaNumeric)}
        leftIcon={
          <NameIcon
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
      <Field
        name="confirmPassword"
        placeholder="confirmPassword"
        type="password"
        autoCorrect={false}
        component={TextInput}
        validate={composeValidators(
          required,
          confirmPassword(password),
          minLength(6),
        )}
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
