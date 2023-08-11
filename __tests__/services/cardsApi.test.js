import {AxiosError} from 'axios';
import {API} from '../../src/api';
import {service} from '../../src/services/cardsApi';
import {card, error} from './mocks';

describe('services/cardsApi', () => {
  beforeEach(() => {
    jest.spyOn(API, 'get').mockClear();
  });
  describe('getCards', () => {
    it('should be return a card list', async () => {
      const spyFn = jest
        .spyOn(API, 'get')
        .mockImplementation(() => Promise.resolve({data: [card]}));
      const cards = await service.getCards();

      expect(cards).toEqual([card]);
      expect(spyFn).toBeCalledTimes(1);
    });

    it('should be return a empty list when API calls failed', async () => {
      const spyFn = jest
        .spyOn(API, 'get')
        .mockImplementation(() => Promise.reject(new Error(error)));

      await expect(spyFn).rejects.toThrow();
    });
  });

  describe('postCard', () => {
    it('should be register a new card and return a object', async () => {
      const spyFn = jest
        .spyOn(API, 'post')
        .mockImplementation(() => Promise.resolve({data: card}));

      const newCard = await service.postCard(card);

      expect(newCard).toEqual(card);
      expect(spyFn).toHaveBeenCalledTimes(1);
    });

    it('should be return a empty list when API calls failed', async () => {
      const spyFn = jest
        .spyOn(API, 'post')
        .mockImplementation(() => Promise.reject(new Error(error)));

      await expect(spyFn).rejects.toThrow();
    });
  });
});
