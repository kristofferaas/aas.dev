import { product } from "./grub/product";
import { venue } from "./grub/venue";
import { planet } from "./universe/planet";
import { settlement } from "./universe/settlement";
import { star } from "./universe/star";

export const schemaTypes = [
  // universe
  star,
  planet,
  settlement,

  // grub
  venue,
  product,
];
