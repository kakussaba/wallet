import {Card} from '../../services/types';

export type CardsProps = {
  data: Card[];
  cardInUse: boolean;
  onCardPress: () => void;
  onButtonPress: () => void;
};
