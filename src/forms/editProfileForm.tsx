import { NameIcon } from '@src/modules/app/components/Icons';
import {
  ImagePicker,
  TextInput,
} from '@src/modules/app/components/InputComponent';
import { composeValidators, required } from '@src/utils';
import { Field, FieldProps } from 'formik';
import { Text, View } from 'native-base';
import React, { FC } from 'react';
import { ScrollView } from 'react-native';

export const EditProfileForm: FC = () => {
  const DrawingConstant = {
    iconSize: 20,
    iconColor: 'gray',
  };

  return (
    <ScrollView>
      <View alignItems="center" my={5}>
        <Field name="avatar" component={ImagePicker} />
      </View>
      <Field
        name="username"
        component={({ form }: FieldProps) => (
          <View
            mb={4}
            flexDir="row"
            alignItems="baseline"
            justifyContent="center">
            <Text fontSize="sm">username:</Text>
            <Text mx={1} fontSize="lg" fontWeight="semibold">
              {form.values.username}
            </Text>
          </View>
        )}
      />
      <Field
        name="name"
        placeholder="Name"
        component={TextInput}
        validate={composeValidators(required)}
        leftIcon={
          <NameIcon
            size={DrawingConstant.iconSize}
            color={DrawingConstant.iconColor}
          />
        }
      />
    </ScrollView>
  );
};
