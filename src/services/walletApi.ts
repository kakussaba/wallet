import {API} from './index';
import {AxiosResponse} from 'axios';
import {Card} from './types';

export const getCards = () => API.get<AxiosResponse<Card[]>>('/cards');
