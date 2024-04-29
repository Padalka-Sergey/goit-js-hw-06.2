const listArrRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${listArrRef.length}`);

listArrRef.forEach(elem => {
  const itemTitleRef = elem.querySelector('h2');
  const innerArrRef = elem.querySelectorAll('.item li');
  console.log(`Category: ${itemTitleRef.textContent}`);
  console.log(`Elements: ${innerArrRef.length}`);
});
