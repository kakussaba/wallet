import {API} from './index';
import {AxiosResponse} from 'axios';
import {Card} from './types';

export const getCards = async () => {
  try {
    const data = await API.get<AxiosResponse<Card[]>>('/cards');
    return data.data;
  } catch (error) {
    return [];
  }
};

export const postCard = async (card: Card) => {
  try {
    const data = await API.post<AxiosResponse<Card>>('/cards', card);
    return data.data;
  } catch (error) {
    return {};
  }
};
