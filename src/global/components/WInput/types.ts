import {NativeSyntheticEvent, TextInputFocusEventData} from 'react-native';

export type WInputProps = {
  value: string;
  label: string;
  mask?: any;
  full?: boolean;
  placeholder?: string;
  onChangeText: (value: string) => void;
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
};
