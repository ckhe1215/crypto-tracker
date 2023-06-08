import { atom } from "recoil";
import { PriceData } from "./types/data";

export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});

export const coinPrice = atom<PriceData>({
  key: "coinPrice",
});
