import { useMutation } from '@apollo/client';
import { EditProfileForm } from '@forms/editProfileForm';
import { useNavigation } from '@react-navigation/native';
import { UPDATE_ME } from '@src/graphql/user.graphql';
import { EditProfileScreenType } from '@src/navigations/types/navigationType';
import { getMe } from '@store/actions/auth-action';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { Formik } from 'formik';
import { HStack, Text, View } from 'native-base';
import React from 'react';
import { Button } from 'react-native-elements';

export const EditProfileScreen = () => {
  const user = useAppSelector(state => state.auth.user);

  const dispatch = useAppDispatch();
  const navigation = useNavigation<EditProfileScreenType>();
  const [updateMe] = useMutation(UPDATE_ME, {
    onCompleted: async () => {
      await getMe()(dispatch);
      close();
    },
  });

  const close = () => {
    navigation.goBack();
  };

  const onSubmit = async (e: formValueType) => {
    try {
      if (typeof e.avatar !== 'string') {
        await updateMe({
          variables: { name: e.name, thumbnail: e.avatar },
        });
      } else {
        await updateMe({
          variables: { name: e.name },
        });
      }
    } catch (err) {
      console.warn(err);
    }
  };

  interface formValueType {
    name: string | undefined;
    username: string | undefined;
    avatar: any;
  }
  const initialValues: formValueType = {
    name: user?.name,
    avatar: user?.avatar,
    username: user?.username,
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <View p={4} flex={1} bgColor="white">
          <HStack justifyContent="space-between" alignItems="center">
            <Button type="clear" title="Cancel" onPress={close} />
            <Button onPress={handleSubmit} type="clear" title="Done" />
          </HStack>
          <Text pl={3} fontSize="3xl" fontWeight="semibold">
            Edit Profile
          </Text>

          <EditProfileForm />
        </View>
      )}
    </Formik>
  );
};
