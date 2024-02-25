import { createContext, useContext } from "react";
import { State, ProviderProps } from "./types";
import { useContextCards } from "./state";
import literals from "../stubs/literals.json";

const Context = createContext<State | undefined>(undefined);

export const useCards = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error(literals.sc_CARD_AVAILABLE);
  }
  return context;
};

export const CardProvider: React.FC<ProviderProps> = ({ children }) => {
  const state = useContextCards();
  return <Context.Provider {...{ children }} value={state} />;
};
