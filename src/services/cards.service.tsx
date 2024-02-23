import { useCallback, useEffect, useState } from "react";
import { useCards } from "../context";
import { ICard } from "../interfaces/card";

export const useCardsService = () => {
  const [error, setError] = useState("");
  const [loadingCards, setLoadingCards] = useState(false);
  const [cards, setCards] = useState<ICard[]>([]);

  const { setOpenSnackbar } = useCards();

  const getCards = useCallback(async () => {
    setLoadingCards(true);
    await fetch("https://jsonplaceholder.typicode.com/users?_start=0&_limit=6")
      .then((res) => res.json())
      .then((cards) => {
        setLoadingCards(false);
        setCards(cards);
      })
      .catch((err) => {
        setLoadingCards(false);
        setError("Failed retrieving cards");
        setOpenSnackbar(true);
      });
  }, [setLoadingCards, setCards, setOpenSnackbar]);

  useEffect(() => {
    getCards();
  }, [getCards]);

  return { loadingCards, error, cards };
};
