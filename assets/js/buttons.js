// const add = document.querySelector('#add');
// const subtract = document.querySelector('#subtract');
// const quantity = document.querySelector('#quantity');

// add.addEventListener('click', () => quantity.value = Number(quantity.value) + 1);
// subtract.addEventListener('click', () => {
//     if (quantity.value>0) {
//         quantity.value = Number(quantity.value) - 1
//     }
// });



document.addEventListener('DOMContentLoaded', () => {
  function setupQuantityControls(addId, subtractId, quantityId) {
    const add = document.getElementById(addId);
    const subtract = document.getElementById(subtractId);
    const quantity = document.getElementById(quantityId);

    if (add && subtract && quantity) {
      add.addEventListener('click', () => quantity.value = Number(quantity.value) + 1);
      subtract.addEventListener('click', () => {
        if (quantity.value > 0) {
          quantity.value = Number(quantity.value) - 1;
        }
      });
    }
  }

  setupQuantityControls('add', 'subtract', 'quantity');
  setupQuantityControls('add1', 'subtract1', 'quantity1');
  setupQuantityControls('add2', 'subtract2', 'quantity2');
});

    
