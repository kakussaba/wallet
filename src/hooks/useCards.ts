import {useCallback, useEffect, useState} from 'react';
import {getCards} from '../services/cardsApi';
import {Card} from '../services/types';

export const useCards = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const updateCards = useCallback(async () => {
    try {
      const data = await getCards();
      setCards(data);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, []);

  useEffect(() => {
    updateCards();
  }, []);

  return [cards, updateCards, loading];
};
