import { vi } from "@/locales/vi";

export const useLang = () => {
  const t = (key: string) => {
    return key.split(".").reduce((acc, cur) => acc?.[cur], vi as any);
  };

  return { t };
};