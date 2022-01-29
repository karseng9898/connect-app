declare module 'redux-persist/es/persistReducer';
declare module 'react-native-dotenv' {
  export const API_BASE: string;
  export const SOCKET_URL: string;
}

declare module '*.svg' {
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.png' {
  const value: any;
  export = value;
}

declare module '*.mp4' {
  const value: any;
  export = value;
}

declare module '*.json' {
  const value: any;
  export = value;
}
