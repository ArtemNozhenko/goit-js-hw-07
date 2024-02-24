const categoriesItems = document.querySelectorAll('.item');

categoriesItems.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryItemsCount = item.querySelectorAll('ul li').length;

console.log(`Category: ${categoryTitle}`);
console.log(`Elements: ${categoryItemsCount}`);
});
