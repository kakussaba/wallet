import {act, renderHook} from '@testing-library/react-hooks';
import {useCards} from '../../src/hooks/useCards';
import {getCards} from '../../src/services/cardsApi';

jest.mock('../../src/services/cardsApi');

describe('hooks/useCards', () => {
  const mock = [
    {
      id: '3302a0a5-88c1-4100-a28d-726bbd414679',
      type: 0,
      number: '3443 4343 4343 4343',
      name: 'Teste 1',
      expiration: '43/43',
      cvv: '343',
    },
  ];

  const updatedMock = [
    {
      id: '3302a0a5-88c1-4100-a28d-726bbd414679',
      type: 0,
      number: '3443 4343 4343 4343',
      name: 'Teste 1',
      expiration: '43/43',
      cvv: '343',
    },
    {
      id: '3302a0a5-88c1-4100-a28d-726bbd414612',
      type: 0,
      number: '3443 4343 4343 4343',
      name: 'Teste 2',
      expiration: '43/43',
      cvv: '343',
    },
  ];

  it('should be return a card list and a update function', async () => {
    getCards.mockImplementation(() => mock);

    const {result, waitForNextUpdate} = renderHook(() => useCards());
    expect(result.current[0]).toEqual([]);

    await waitForNextUpdate();
    expect(result.current[0]).toEqual(mock);

    getCards.mockImplementation(() => updatedMock);

    await act(() => result.current[1]());
    expect(result.current[0]).toEqual(updatedMock);
  });

  it('should return an empty object when the request fails', async () => {
    getCards.mockImplementation(() => []);
    const {result} = renderHook(() => useCards());
    expect(result.current[0]).toEqual([]);
  });
});
