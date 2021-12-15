import { appStyles } from '@src/styles';
import { SectionListDataType } from '@src/types/app.types';
import React from 'react';
import { SectionList, View } from 'react-native';
import { ContactItem, Header } from '../components';
import { ContactListDataType } from '../types';

export const ContactsScreen = () => {
  return (
    <View style={[appStyles.container]}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => {
          return <ContactItem data={item} />;
        }}
        renderSectionHeader={({ section }) => {
          return <Header title={section.title} />;
        }}
      />
    </View>
  );
};

const DATA: SectionListDataType<ContactListDataType>[] = [
  {
    title: 'c',
    data: [
      {
        avatarUri:
          'https://www.hollywoodreporter.com/wp-content/uploads/2021/04/GettyImages-1095656810-H-2021-1619544255.jpg',
        name: 'Chen Fook Lin',
      },
    ],
  },
  {
    title: 'l',
    data: [
      {
        avatarUri:
          'https://images.chinatimes.com/newsphoto/2021-03-19/656/20210319003325.jpg',
        name: 'Loh Li Ling',
      },
    ],
  },
];
