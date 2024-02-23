import React from "react";

import { useContextCards } from "./state";

export interface ProviderProps {
  children: React.ReactNode;
}

export type State = ReturnType<typeof useContextCards>;
