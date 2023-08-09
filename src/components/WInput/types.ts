import {NativeSyntheticEvent, TextInputFocusEventData} from 'react-native';

export type WInputProps = {
  value: string;
  label: string;
  onChangeText: (value: string) => void;
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  type?: 'default' | 'numeric';
  testID: string;
  mask?: any;
  full?: boolean;
  placeholder?: string;
};
