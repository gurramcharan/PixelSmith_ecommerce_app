import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Normal Monitors",
    subCategory:["24inch","27inch","29inch","32inch"],
    description:
      "For general purposes, Browsing and gaming",
  },
  {
    _id: uuid(),
    categoryName: "Ultrawide Monitors",
    subCategory:["29inchUltrawide","34inchUltrawide"],
    description:
      "For editors, crazy coders and passionate people",
  },
];
