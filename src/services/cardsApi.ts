import {API} from '../api/index';
import {Card} from './types';

async function getCards(): Promise<Card[] | []> {
  try {
    const {data} = await API.get('/cards');
    return data;
  } catch (err) {
    throw err;
  }
}

async function postCard(card: Card): Promise<Card | null> {
  try {
    const {data} = await API.post<Card>('/cards', card);
    return data;
  } catch (err) {
    throw err;
  }
}

export const service = {getCards, postCard};
