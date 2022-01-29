import { client } from '@config/apollo-client';
import { useNavigation } from '@react-navigation/native';
import { CREATE_POST } from '@src/graphql/post.graphql';
import { Button, Text, TextArea } from 'native-base';
import React, { FC, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export const CreatePostScreen: FC = () => {
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigation = useNavigation();

  const handleChange = (value: string) => {
    setMessage(value);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    await client.mutate({
      mutation: CREATE_POST,
      variables: { content: message },
    });
    setSubmitting(false);
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <Text textAlign="center" fontSize="2xl">
        Add Post
      </Text>
      <TextArea
        m={5}
        fontSize="lg"
        placeholder="Content"
        borderColor="gray.300"
        minHeight={200}
        alignItems="flex-start"
        onChangeText={handleChange}
        value={message}
      />
      <Button
        mx={5}
        onPress={handleSubmit}
        disabled={submitting}
        isLoading={submitting}
        isLoadingText="Creating...">
        <Text color="white" fontSize="md">
          Create
        </Text>
      </Button>
    </SafeAreaView>
  );
};
