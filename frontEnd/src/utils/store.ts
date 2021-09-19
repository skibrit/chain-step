export const setSessionItem = (key: string, value: string) => {
  window?.sessionStorage.setItem(key, value);
};

export const getSessionItem = (key: string): string | null => {
  return window?.sessionStorage.getItem(key);
};

export const setPersistentItem = (key: string, value: string) => {
  window?.localStorage.setItem(key, value);
};

export const getPersistentItem = (key: string): string | null => {
  return window?.localStorage.getItem(key);
};
