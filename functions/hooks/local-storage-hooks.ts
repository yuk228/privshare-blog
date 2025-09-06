import { useEffect, useState } from "react";

type Props = "title" | "body";
type UseLocalStorage = [string, (value: string) => void, () => void];

const localStorage = typeof window !== "undefined" ? window.localStorage : null;

export function useLocalStorage(key: Props): UseLocalStorage {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    setValue(localStorage?.getItem(key) || "");
  }, [key]);

  const setStorageValue = (newValue: string) => {
    setValue(newValue);
    localStorage?.setItem(key, newValue);
  };

  const clearStorageValue = () => {
    setValue("");
    localStorage?.removeItem(key);
  };

  return [value, setStorageValue, clearStorageValue];
}
