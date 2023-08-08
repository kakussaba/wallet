export enum TypeCard {
  BLACK_CARD = 0,
  GREEN_CARD = 1,
}

export interface Card {
  id: string;
  number: string;
  cvv: string;
  name: string;
  expiration: string;
  type: TypeCard.BLACK_CARD | TypeCard.GREEN_CARD;
}
