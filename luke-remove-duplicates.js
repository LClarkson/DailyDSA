const array = [1,2,2,3,4,5,6,6,7,8];
const set = new Set(array);
console.log(set);
const noDupes = [...set];
console.log(noDupes);
const array2 = ['Luke', 'Max', 'Penny'];
console.log(array2);
console.log(...array2);
console.log(...noDupes);
const noDupes2 = [...new Set(array)];
console.log(noDupes2);
const names = ['Luke', 'Max', 'Luke', 'Dad', 'Mom', 'Penny'];
const dupeNames = [...new Set(names)];
console.log(dupeNames);
const set2 = new Set();
console.log(set2);