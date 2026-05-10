const btn = document.querySelectorAll(".button button");

btn.forEach(function (button) {
  button.addEventListener("click", function (event) {
    var product = event.target.closest(".items");

    var img = product.querySelector(".image img").src;
    var name = product.querySelector(".text h4").textContent;
    var price = product.querySelector(".text span").textContent;

    addcart(price, name, img, 1);
  });
});

function addcart(price, name, img, qtt) {
  var cartItem = document.querySelectorAll("tbody tr");

  for (var i = 0; i < cartItem.length; i++) {
    var productT = cartItem[i].querySelector(".title");

    if (productT.innerHTML == name) {
      var input = cartItem[i].querySelector("input");

      input.value = parseInt(input.value) + 1;

      cartTotal();

      alert("The product has been added to cart");

      return;
    }
  }

  var addtr = document.createElement("tr");

  var trcontent = `
    <td style="display:flex;align-items:center;">
      <img style="width:80px;" src="${img}">
      <span class="title">${name}</span>
    </td>

    <td>
      $<span class="price">${price}</span>
    </td>

    <td>
      <input 
        type="number"
        style="width:30px;outline:none;color:black;"
        value="${qtt}"
        min="1"
        max="10"
      >
    </td>

    <td style="cursor:pointer;">
      <span class="cart-delete">Remove</span>
    </td>
  `;

  addtr.innerHTML = trcontent;

  document.querySelector("tbody").append(addtr);

  alert("Add to cart successfully");

  addtr.querySelector(".cart-delete").addEventListener("click", function () {
    addtr.remove();

    cartTotal();
  });

  addtr.querySelector("input").addEventListener("change", function () {
    cartTotal();
  });

  cartTotal();
}

function cartTotal() {
  var cartItem = document.querySelectorAll("tbody tr");

  var totalPrice = 0;

  for (var i = 0; i < cartItem.length; i++) {
    var input = cartItem[i].querySelector("input").value;

    var price = cartItem[i].querySelector(".price").innerHTML;

    var totalA = input * price;

    totalPrice += totalA;
  }

  document.querySelector(".price-total span").innerHTML = totalPrice.toFixed(3);
}
