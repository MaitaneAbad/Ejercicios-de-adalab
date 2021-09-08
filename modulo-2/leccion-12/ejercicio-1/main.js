const numbers = [1, 2, 3];

for (let eachNumber of numbers) {
  const newItem = document.createElement('li');
  const newContent = document.createTextNode(eachNumber);
  newItem.appendChild(newContent);
  const items = document.querySelector('.items');
  items.appendChild(newItem);
}
