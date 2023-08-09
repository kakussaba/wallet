import {Card} from '../../services/types';

export type RegisterStackParamList = {
  Form: {
    cards?: Card[];
  };
  Preview: {
    card: Card;
  };
};
