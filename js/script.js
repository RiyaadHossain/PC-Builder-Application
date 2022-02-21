/* $$$$$$ Total Net Price $$$$$$ */
const netPrice = document.getElementById("total-price");


document.getElementById("sixteenGB").addEventListener("click", () => {
   
    updateBalance('memory-cost', 200)
});

/* ============== Common Function to Update Balance  */
function updateBalance(input, price) {
    let itemCost = document.getElementById(input);
    itemCost.innerText = price;
  
    const memoryCost = document.getElementById("memory-cost");
    const storageCost = document.getElementById("storage-cost");
    const deliveryCost = document.getElementById("delivery-cost");
  
    const totalCost =
      parseInt(memoryCost.innerText) + parseInt(storageCost.innerText) + parseInt(deliveryCost.innerText);
  
    netPrice.innerText = parseFloat(netPrice.innerText) + totalCost;
}
