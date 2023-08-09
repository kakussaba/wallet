import {useCallback, useEffect, useState} from 'react';
import {getCards} from '../services/cardsApi';

export const useCards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const updateCards = useCallback(async () => {
    try {
      const updatedCards = await getCards();
      setCards(updatedCards);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    updateCards();
  }, [updateCards]);

  return {cards, updateCards, loading};
};
