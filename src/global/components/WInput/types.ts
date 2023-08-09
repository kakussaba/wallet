import {NativeSyntheticEvent, TextInputFocusEventData} from 'react-native';

export type WInputProps = {
  value: string;
  label: string;
  type: 'default' | 'numeric';
  onChangeText: (value: string) => void;
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  testID: string;
  mask?: any;
  full?: boolean;
  placeholder?: string;
};
