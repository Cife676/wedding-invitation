import {
  createContext,
  useContext,
} from "react";

import en from "./dictionaries/en";
import type { Translation } from "./schema";

type ContextType = {
  language: string;
  t: Translation;
};

const LanguageContext = createContext<ContextType | null>(null);

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageContext.Provider
      value={{
        language: "en",
        t: en,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("LanguageProvider is missing.");
  }

  return context;
}
