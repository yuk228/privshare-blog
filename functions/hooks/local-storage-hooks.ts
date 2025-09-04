import { useEffect, useState } from "react";

type Props = "title" | "content";
type UseLocalStorage = [string, (value: string) => void];

const localStorage = typeof window !== "undefined" ? window.localStorage : null;

export function useLocalStorage(key: Props): UseLocalStorage {
  const [value, setValue] = useState<string>(localStorage?.getItem(key) || "");
  useEffect(() => {
    localStorage?.setItem(key, value);
  }, [value]);
  return [value, setValue];
}
