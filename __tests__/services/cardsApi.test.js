import {API} from '../../src/services';
import {getCards, postCard} from '../../src/services/cardsApi';

jest.mock('../../src/services/index');

const mockSuccessRequest = result => {
  return new Promise(resolve => {
    resolve({
      data: result,
    });
  });
};

const mockFailRequest = () => {
  return new Promise(_, reject => {
    reject();
  });
};

describe('services/cardsApi', () => {
  beforeEach(() => {
    API.get.mockClear();
  });

  describe('getCards', () => {
    const mock = [
      {
        id: '3302a0a5-88c1-4100-a28d-726bbd414679',
        type: 0,
        number: '3443 4343 4343 4343',
        name: '434343434',
        expiration: '43/43',
        cvv: '343',
      },
    ];

    it('should be return a card list', async () => {
      API.get.mockImplementation(() => mockSuccessRequest(mock));
      const cards = await getCards();

      expect(cards).toEqual(mock);
      expect(API.get).toHaveBeenCalledWith('/cards');
      expect(API.get).toHaveBeenCalledTimes(1);
    });

    it('should return an empty list when the request fails', async () => {
      API.get.mockImplementation(() => mockFailRequest());
      const cards = await getCards();

      expect(cards).toEqual([]);
      expect(API.get).toHaveBeenCalledWith('/cards');
      expect(API.get).toHaveBeenCalledTimes(1);
    });
  });

  describe('postCard', () => {
    const mock = {
      id: '3302a0a5-88c1-4100-a28d-726bbd414679',
      type: 0,
      number: '3443 4343 4343 4343',
      name: '434343434',
      expiration: '43/43',
      cvv: '343',
    };

    it('should be register a new card and return a object', async () => {
      API.post.mockImplementation(() => mockSuccessRequest(mock));
      const card = await postCard(card);

      expect(card).toEqual(mock);
      expect(API.post).toHaveBeenCalledTimes(1);
    });

    it('should return an empty object when the request fails', async () => {
      API.post.mockImplementation(() => mockFailRequest());
      const card = await postCard(card);

      expect(card).toEqual({});
    });
  });
});
