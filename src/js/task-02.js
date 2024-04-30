const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngr = document.querySelector('#ingredients');
// console.log(ulIngr);

let arr = [];
ingredients.forEach(ingredient => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList = 'item';
  arr.push(liEl);
});
// console.log(arr);

ulIngr.append(...arr);

// const makeList = items => {
//   return items.map(element => {
//     const itemRef = document.createElement('li');
//     itemRef.textContent = element;
//     itemRef.classList.add('item');
//     return itemRef;
//   });
// };

// const listRef = document.querySelector('#ingredients');
// const arrRef = makeList(ingredients);
// console.log(arrRef);
// listRef.append(...arrRef);
