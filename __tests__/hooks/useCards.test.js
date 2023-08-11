import {act, renderHook} from '@testing-library/react-hooks';
import {API} from '../../src/api';
import {useCards} from '../../src/hooks/useCards';
import {card, card2} from '../services/mocks';

describe('hooks/useCards', () => {
  it('should be return a card list and a update function', async () => {
    jest
      .spyOn(API, 'get')
      .mockImplementation(() => Promise.resolve({data: [card]}));

    const {result, waitForNextUpdate} = renderHook(() => useCards());
    expect(result.current[0]).toEqual([]);

    await waitForNextUpdate();
    expect(result.current[0]).toEqual([card]);

    jest
      .spyOn(API, 'get')
      .mockImplementation(() => Promise.resolve({data: [card, card2]}));

    await act(() => result.current[1]());
    expect(result.current[0]).toEqual([card, card2]);
  });

  it('should return an empty object when the request fails', async () => {
    jest.spyOn(API, 'get').mockImplementation(() => Promise.reject());
    const {result} = renderHook(() => useCards());
    expect(result.current[0]).toEqual([]);
  });
});
