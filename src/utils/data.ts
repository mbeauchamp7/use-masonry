import { MasonryItemModel } from "../hooks/useMasonry";
import { v4 as uuidv4 } from "uuid";

const APIItems: Array<MasonryItemModel> = [
  { originalWidth: 200, originalHeight: 400 },
  { originalWidth: 400, originalHeight: 300 },
  { originalWidth: 600, originalHeight: 400 },
  { originalWidth: 200, originalHeight: 300 },
  { originalWidth: 300, originalHeight: 700 },
  { originalWidth: 250, originalHeight: 450 },
  { originalWidth: 400, originalHeight: 400 },
  { originalWidth: 550, originalHeight: 475 },
  { originalWidth: 800, originalHeight: 600 },
  { originalWidth: 1100, originalHeight: 700 },
  { originalWidth: 900, originalHeight: 600 },
  { originalWidth: 575, originalHeight: 700 },
];

export const getAPIItems = () => {
  const newItems = [];

  for (let i = 0; i < APIItems.length; i++) {
    newItems.push({ ...APIItems[i], id: uuidv4() })
  }

  return newItems;
}