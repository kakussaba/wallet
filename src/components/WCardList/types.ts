import {Card} from '../../services/types';

export interface WCardListProps {
  data: Card[];
  cardInUse: boolean;
  onPress: () => void;
}
