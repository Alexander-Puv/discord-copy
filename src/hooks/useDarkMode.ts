import { useEffect, useState } from 'react';

type setValue = (value: Function | boolean) => void

type useLocalStorageType = (key: string, initialValue?: boolean) => [boolean, setValue]
type useDarkModeType = () => [boolean, setValue]

const useLocalStorage: useLocalStorageType = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue: setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
};

const useDarkMode: useDarkModeType = () => {
  const [enabled, setEnabled] = useLocalStorage('dark-theme');

  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;

    enabled ? bodyClass.add(className) : bodyClass.remove(className);
  }, [enabled]);

  return [enabled, setEnabled];
};

export default useDarkMode;