/* $$$$$$ Total Net Price $$$$$$ */
const netPrice = document.getElementById("total-price");

onClick("eightGB", "memory-cost", 00);
onClick("sixteenGB", "memory-cost", 300);
onClick("ssd1", "storage-cost", 00);
onClick("ssd2", "storage-cost", 200);
onClick("ssd3", "storage-cost", 500);
onClick("free-delivery", "delivery-cost", 00);
onClick("paid-delivery", "delivery-cost", 20);

/* ============== Common Function to fire Click Event ============== */
function onClick(button, input, price) {
  document.getElementById(button).addEventListener("click", () => {
    updateBalance(input, price);
  });
}

/* ============== Common Function to Update Balance ============== */
function updateBalance(input, price) {
  let itemCost = document.getElementById(input);
  itemCost.innerText = price;

  const bestPrice = document.getElementById("best-price");
  const memoryCost = document.getElementById("memory-cost");
  const storageCost = document.getElementById("storage-cost");
  const deliveryCost = document.getElementById("delivery-cost");

  const totalCost =
    parseFloat(bestPrice.innerText) +
    parseInt(memoryCost.innerText) +
    parseInt(storageCost.innerText) +
    parseInt(deliveryCost.innerText);

  netPrice.innerText = totalCost;
}
