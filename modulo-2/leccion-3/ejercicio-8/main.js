"use strict";

const year = 1773;
const calc = year % 4;

switch (calc) {
  case 0:
    console.log(year);
    break;
  case 1:
    console.log(year + 3);
    break;
  case 2:
    console.log(year + 2);
    break;
  case 3:
    console.log(year + 1);
    break;
  default:
}
