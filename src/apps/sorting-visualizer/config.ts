import { algoList } from "./sorting-algorithms/algo-list";

export const menuItems = algoList.map((item) => item.name).concat("all");
export const initialArray = [6, 8, 3, 5, 1, 9, 2, 7, 4];

export const cellCSS = {
  size: 50,
  margin: 4,
};

export const colors = {
  sort: "springgreen",
  highlight: "yellow",
  pivot: "orange",
};

export const selectedAlgosStatus = algoList.map(() => true);

const root = document.querySelector(":root") as HTMLElement;
root.style.setProperty("--cell-size", `${cellCSS.size}px`);
root.style.setProperty("--cell-margin", `${cellCSS.margin}px`);
