export interface Card {
  id: string;
  number: string;
  cvv: string;
  name: string;
  expiration: string;
  type: 'Black Card' | 'Green Card';
}
