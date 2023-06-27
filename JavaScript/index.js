const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = '0';

let shipping = null;
let currency = '$';

const location = 'RSA';
let customers = 1;

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * parseInt(NONE_SELECTED);
const batteries = 35 * 2;
const pens = 5 * parseInt(NONE_SELECTED);

if (location === 'RSA') {
  shipping = 400;
  currency = 'R';
} else if (location === 'NAM') {
  shipping = 600;
  currency = '$';
} else {
  shipping = 800;
  currency = '$';
}

const totalCost = shoes + toys + shirts + batteries + pens;

if (totalCost >= 1000 && (location === 'RSA' || location === 'NAM')) {
  if (customers === 1) {
    shipping = 0;
  } else {
    console.log(FREE_WARNING);
  }
}

if (location === 'NK') {
  console.log(BANNED_WARNING);
} else {
  console.log('Price:', currency, totalCost + shipping);
}