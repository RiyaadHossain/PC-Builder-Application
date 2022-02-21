/* $$$$$$ Total Net Price $$$$$$ */
const netPrice = document.getElementById("total-price");

/* 
* ! Promo Code message
*/
const successMsg = document.getElementById("success-text")
const failedMsg = document.getElementById("failed-text")


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


/* =========== Promo Code Varification =========== */
document.getElementById('apply-btn').addEventListener('click', () => {
    const promo = document.getElementById("promo-input");
    if (promo.value == 'pHero') {
        const discount = parseInt(netPrice.innerText) * 0.2
        netPrice.innerText = parseFloat(netPrice.innerText) - discount;
        successMsg.style.display = 'block'
        failedMsg.style.display = 'none'
        promo.value = ''
    } else {
        alert("Your Promo Code is incorrect :(");
        failedMsg.style.display = 'block'
        successMsg.style.display = 'none'
    }
})