export interface RegisterInput {
  username: string;
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export interface LoginInput {
  usernameOrEmail: string;
  password: string;
}

export interface AuthButtonProps {
  onPress: () => void;
  title: string;
  loading: boolean;
}
