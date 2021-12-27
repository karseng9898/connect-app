import React, { FC, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import { addUserCardStyle } from '../style';
import { AddUserCardProps } from '../types';
import { CardContainerView } from './CardContainer';

export const AddUserCard: FC<AddUserCardProps> = props => {
  const { user } = props;
  const [addPressed, setAddPressed] = useState(false);

  return (
    <CardContainerView>
      <View style={[addUserCardStyle.container]}>
        <Avatar
          source={{
            uri: user.avatar || undefined,
          }}
          size="large"
          icon={{ type: 'ionicon', name: 'person', color: 'lightgray' }}
          containerStyle={[addUserCardStyle.avatarContainer]}
          rounded
          imageProps={{ resizeMode: 'cover' }}
        />
        <View style={[addUserCardStyle.rightContainer]}>
          <View style={[addUserCardStyle.textContainer]}>
            <Text style={[addUserCardStyle.name]}>{user.name}</Text>
          </View>
          <Pressable
            onPressIn={() => setAddPressed(true)}
            onPressOut={() => setAddPressed(false)}>
            <Icon
              type="ionicon"
              name={addPressed ? 'person-add' : 'person-add-outline'}
              size={36}
              color="gray"
              tvParallaxProperties
            />
          </Pressable>
        </View>
      </View>
    </CardContainerView>
  );
};
