import { useLanguageContext } from "./LanguageProvider";

export function useTranslations() {
  return useLanguageContext();
}
