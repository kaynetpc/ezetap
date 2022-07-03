export const toPercent = (value: number, base: number) => {
  return Math.floor(( value/base) * 100);
};

// trim text
export const trimText = (initialText: string, len: number, filler?: string | any) => {
  const newText = initialText.slice(0, len) + (filler?? '...');
  return initialText.length > len? newText: initialText;
};

export const validateField = (field: any[],
    emptyKey: (k: string) => void, callback: () => void) => {
  if (Array.isArray(field)) {
    field.forEach((el) => {
      for (const key in el) {
        if (el[key] === '' || el[key] === null || el[key] === undefined) {
          emptyKey && emptyKey(key);
          return false;
        }
      }
    });
  }
  callback && callback();
  return true;
};
