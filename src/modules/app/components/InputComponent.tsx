import { inputStyles } from '@styles';
import _ from 'lodash';
import { Avatar, Box, HStack, Pressable, Text } from 'native-base';
import RNImagePicker from 'react-native-image-crop-picker';
import { Input } from 'react-native-elements';
import React, { FC, useEffect, useRef, useState } from 'react';
import { TextInputProps } from '../types';
import Modal, { ModalRef } from './Modal';
import { generateRNFile } from '@src/utils';
import { StyleSheet } from 'react-native';
import Icon from './Icon';
import { ShowHidePassword } from './Icons';

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
      autoCompleteType="none"
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

export const ImagePicker: FC<any> = props => {
  const { field, form } = props;
  const modalRef = useRef<ModalRef>(null);

  const [avatar, setAvatar] = useState<{ path: string }>({ path: '' });

  useEffect(() => {
    if (field.value && _.isString(field.value)) {
      setAvatar({ path: field.value });
    }
  }, [field.value]);

  const openLibrary = () => {
    RNImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: true,
      mediaType: 'photo',
    })
      .then(image => {
        setAvatar(image);
        const o = generateRNFile({ uri: image.path, name: 'avatar' });
        form.setFieldValue(field.name, o);
        modalRef.current?.pushModal();
      })
      .catch(err => console.warn(err));
  };

  const openCamera = () => {
    RNImagePicker.openCamera({
      width: 500,
      height: 500,
      mediaType: 'photo',
      cropping: true,
    }).then(image => {
      setAvatar(image);
      const o = generateRNFile({ uri: image.path, name: 'avatar' });
      form.setFieldValue(field.name, o);
      modalRef.current?.pushModal();
    });
  };

  const handlePress = async () => {
    modalRef.current?.pushModal();
  };
  return (
    <Box justifyContent="center" alignItems="center">
      <Pressable onPress={handlePress}>
        {avatar.path ? (
          <Avatar
            source={{ uri: avatar.path }}
            size="100"
            rounded="full"
            borderWidth={0.7}
            borderColor="blueGray.300"
          />
        ) : (
          <HStack style={[styles.emptyAvatar]}>
            <Icon name="profile-avatar" height={30} width={30} />
          </HStack>
        )}
      </Pressable>
      <Modal ref={modalRef} type="bottom">
        <ModalItem label="Take Photo" onPress={() => openCamera()} />
        <ModalItem label="Choose From Library" onPress={() => openLibrary()} />
        <ModalItem
          label="Cancel"
          onPress={() => modalRef.current?.pushModal()}
        />
      </Modal>
    </Box>
  );
};

type ModalItemProps = { label: string; onPress: () => void };
const ModalItem: FC<ModalItemProps> = props => {
  return (
    <Box>
      <Pressable
        _pressed={{ opacity: 0.7 }}
        onPress={() => {
          props.onPress();
        }}>
        <HStack
          justifyContent="center"
          alignItems="center"
          borderBottomWidth={1}
          borderColor="#E0E0E0"
          py={4}>
          <Text variant="body1" color="black">
            {props.label}
          </Text>
        </HStack>
      </Pressable>
    </Box>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyAvatar: {
    width: 100,
    height: 100,
    backgroundColor: '#F2F8F1',
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
});
