import {NativeSyntheticEvent, TextInputFocusEventData} from 'react-native';

export type WInputProps = {
  value: string;
  label: string;
  onChangeText: (value: string) => void;
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  maxLength: number;
  full?: boolean;
  placeholder?: string;
  mask?: 'card' | 'date' | 'number';
  testID: string;
};
