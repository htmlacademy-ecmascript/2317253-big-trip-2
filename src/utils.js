function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomPrice() {
  return Math.floor(Math.random() * 10000) + 10;
}

export { getRandomArrayElement, getRandomPrice };
