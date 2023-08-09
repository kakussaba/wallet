import axios from 'axios';
import Cards from '../../src/services/cards';

jest.mock('axios');

describe('cardsAPi tests', () => {
  test('should getCards', async () => {
    const cards = [
      {
        id: '4ec42ba9-50af-40d2-af90-8312edbd9ca2',
        type: 0,
        number: '3529 5435 3355 8727',
        name: 'John Doe',
        expiration: '12/26',
        cvv: '317',
      },
    ];
    const resp = {data: cards};
    axios.get.mockResolvedValue(resp);

    const data = await Cards.all();
    expect(data).toEqual(cards);
  });
});
