let productIitems = document.querySelectorAll(".product_items");
let products = document.querySelectorAll(".product_items ");
let productContainer = document.querySelector(".product_container");
productIitems = Array.from(productIitems);
products = Array.from(products);
productContainerScrollValue = productContainer.scrollLeft;

let isDragging = false;
let startX, currentX;
products.map((z) =>
  z.addEventListener("mousedown", () => {
    z.classList.toggle("grabbing");
  })
);

productContainer.addEventListener("dragstart", function (e) {
  isDragging = true;
  startX = e.clientX;
});

productContainer.addEventListener("dragover", function (e) {
  if (isDragging) {
    currentX = e.clientX;
    if (currentX > startX) {
      productContainer.scrollLeft -= 150;
    } else if (currentX < startX) {
      productContainer.scrollLeft += 150;
    }
  }
});

productContainer.addEventListener("drop", function (e) {
  isDragging = false;
});
