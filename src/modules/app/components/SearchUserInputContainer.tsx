import React, { FC, useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { searchUserInputStyle } from '../style';
import { SearchUserInputContainerProps } from '../types';

export const SearchUserInputContainer: FC<
  SearchUserInputContainerProps
> = props => {
  const { searchPressed, setSearchPressed, onSearch } = props;
  const [searchField, setSearchField] = useState('');

  return (
    <View style={[searchUserInputStyle.container]}>
      <View style={[searchUserInputStyle.inputContainer]}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={[searchUserInputStyle.input]}
          placeholder="Username"
          onChangeText={setSearchField}
        />
        <Pressable
          onPressIn={() => setSearchPressed(true)}
          onPressOut={() => setSearchPressed(false)}
          onPress={() => onSearch(searchField.trim())}>
          <Icon
            type="ionicon"
            name="search"
            size={20}
            color={searchPressed ? '#999' : '#777'}
            tvParallaxProperties
          />
        </Pressable>
      </View>
    </View>
  );
};
