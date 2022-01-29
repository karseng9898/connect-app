import { useEffect } from 'react';
import { ReactNativeFile } from 'apollo-upload-client';
import * as mime from 'react-native-mime-types';

export * from './validators';

export const generateRNFile = ({
  uri,
  name,
  extension,
  type,
}: {
  uri: string;
  name: string;
  extension?: string;
  type?: string;
}) => {
  let exts = extension;
  if (mime.extension(mime.lookup(uri))) {
    exts = mime.extension(mime.lookup(uri));
  } else {
    exts = extension;
  }

  return uri
    ? new ReactNativeFile({
        uri,
        type: mime.lookup(uri) || type,
        name: `${name}.${exts}`,
      })
    : null;
};

export const useDebouncedEffect = (
  effect: () => void,
  deps: any,
  delay: number,
) => {
  useEffect(() => {
    const handler = setTimeout(() => effect(), delay);

    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...(deps || []), delay]);
};
