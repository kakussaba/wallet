import {useCallback, useEffect, useState} from 'react';
import {service} from '../services/cardsApi';
import {Card} from '../services/types';

export const useCards = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const updateCards = useCallback(async () => {
    try {
      const data = await service.getCards();
      setCards(data);
    } catch (error) {
      setCards([]);
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
