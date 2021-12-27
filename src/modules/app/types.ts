import { User } from '@src/graphql/user.graphql';
import { FieldProps } from 'formik';
import { Dispatch, SetStateAction } from 'react';
import { InputProps } from 'react-native-elements';

export interface SearchUserInputContainerProps {
  searchPressed: boolean;
  setSearchPressed: Dispatch<SetStateAction<boolean>>;
  onSearch: (value: string) => void;
}

export interface AddUserCardProps {
  user: User;
}

export interface TextInputProps extends InputProps, FieldProps {
  type: 'password' | undefined;
}
