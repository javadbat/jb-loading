import { JBDictionary } from "jb-core/i18n";

export type JBLoadingDictionary = {
  loading: string;
};

export const dictionary = new JBDictionary<JBLoadingDictionary>({
  fa: { loading: "در حال بارگذاری" },
  en: { loading: "Loading" },
});
