import {Card} from '../../services/types';

export interface WCardProps {
  data: Card;
  onPress?: () => void;
  disabled?: boolean;
  unfocused?: boolean;
}
