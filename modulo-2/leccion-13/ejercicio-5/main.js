const pins = [2389, 2384, 2837, 5232, 8998];

const password = pins.filter((items) => items % 2 === 0);

console.log(password);
