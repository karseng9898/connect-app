import { User } from '@src/graphql/user.graphql';
import { Dispatch, SetStateAction } from 'react';

export interface SearchUserInputContainerProps {
  searchPressed: boolean;
  setSearchPressed: Dispatch<SetStateAction<boolean>>;
  onSearch: (value: string) => void;
}

export interface AddUserCardProps {
  user: User;
}
