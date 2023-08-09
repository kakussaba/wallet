export type WButtonProps = {
  type: 'primary' | 'secondary' | 'tertiary';
  text: string;
  onPress: () => void;
  disabled?: boolean;
};
