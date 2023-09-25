import { FRUITS } from "./data";

export const getSuggestion = (keyword) => {
  const result = FRUITS.filter(
    (i) =>
      i.substring(0, keyword.length).toLocaleLowerCase() ===
      keyword.toLowerCase()
  );
  return result;
};
