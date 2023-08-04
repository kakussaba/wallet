export type WButtonProps = {
  type: 'primary' | 'secondary';
  text: string;
  onPress: () => void;
  disabled?: boolean;
};
