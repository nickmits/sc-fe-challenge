import { createContext, useContext } from "react";
import { State, ProviderProps } from "./types";
import { useContextCards } from "./state";

const Context = createContext<State | undefined>(undefined);

export const useCards = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("No cards available");
  }
  return context;
};

export const CardProvider: React.FC<ProviderProps> = ({ children }) => {
  const state = useContextCards();
  return <Context.Provider {...{ children }} value={state} />;
};
