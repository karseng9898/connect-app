export * from './register.types';
export * from './login.types';

export interface AuthButtonProps {
  onPress: () => void;
  title: string;
  loading: boolean;
}
