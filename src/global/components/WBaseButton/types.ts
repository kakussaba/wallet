export type WButtonProps = {
  type: 'primary' | 'secondary' | 'tertiary';
  text: string;
  onPress: () => void;
  testID: string;
  disabled?: boolean;
};
