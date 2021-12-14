import { inputStyles } from '@styles';
import { FieldProps } from 'formik';
import React, { FC, useEffect, useState } from 'react';
import { Input, InputProps } from 'react-native-elements';
import { ShowHidePassword } from './index';
import _ from 'lodash';

interface TextInputProps extends InputProps, FieldProps {
  type: 'password' | undefined;
}

export const TextInput: FC<TextInputProps> = props => {
  const { field, form, type, ...inputProps } = props;
  const [secureTextEntry, setSecureTextEntry] = useState(false);

  const error =
    _.get(form.touched, field.name) && _.get(form.errors, field.name);

  useEffect(() => {
    setSecureTextEntry(type === 'password');
  }, [type]);

  const rightIcon = () => {
    if (type === 'password') {
      return (
        <ShowHidePassword color="gray" size={20} onPress={setSecureTextEntry} />
      );
    }
    return undefined;
  };

  return (
    <Input
      inputContainerStyle={inputStyles.textInputContainer}
      placeholderTextColor="lightgray"
      autoCompleteType={undefined}
      secureTextEntry={secureTextEntry}
      value={form.values[field.name]}
      onChangeText={form.handleChange(field.name)}
      autoCapitalize="none"
      rightIcon={rightIcon()}
      errorMessage={error as string}
      {...inputProps}
    />
  );
};
