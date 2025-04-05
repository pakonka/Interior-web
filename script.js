const btn = document.querySelectorAll("button");
// console.log(btn)
btn.forEach(function (button, index) {
  button.addEventListener("click", function (event) {
    {
      var btnItem = event.target;
      var products = btnItem.parentElement;
      var product = products.parentElement;
      var img = product.querySelector(".image img").src;
      var name = product.querySelector(".text h4").textContent;
      var price = product.querySelector(".text span").textContent;
      var qtt = 1;
      // localStorage.setItem('cart', addcart(price, name, img, qtt));
      addcart(price, name, img, qtt)
    }
  });
});

function addcart(price, name, img, qtt) {
  var addtr = document.createElement("tr");
  var cartItem = document.querySelectorAll("tbody tr");
  // console.log(cartItem);
  for (var i = 0; i < cartItem.length; i++) {
    var productT = document.querySelectorAll(".title");
    // console.log(productT[2])
    // console.log(productT);
    
    if (productT[1].innerHTML == name) {
      qtt+=1;
      alertE = "The product has been added to cart";
      alert("The product has been added to cart");
      return;
    }
  }
  var trcontent =
    '<tr><td style="display: flex;align-items: center;"><img style="width:80px;"  src="' +
    img +
    '" alt=""><span class="title">' +
    name +
    "</span></td><td><p>$<span class='price'>" +
    price +
    '</span></p></td><td><input type="number" style="width:30px;outline: none;color:black;" value="'+qtt+'" min="1" max="10"></td> <td style="cursor: pointer;"><span class="cart-delete">Remove</span></td></tr><hr>';

  addtr.innerHTML = trcontent;

  alert("Add to cart successfully");
  var cartTable = document.querySelector("tbody");
  cartTable.append(addtr);
  // var lengthcart = cartTable.length;
  // console.log(lengthcart)
  // lengthcart = document.getElementsByClassName("addnumber").innerHTML;

  cartTotal();
}

///TOTAL-------------------------------------------------
function cartTotal() {
  var cartItem = document.querySelectorAll("tbody tr");

  var totalPrice = 0;
  for (var i = 0; i < cartItem.length; i++) {
    var input = cartItem[i].querySelector("input").value;
    // console.log(input);
    var price = cartItem[i].querySelector(".price").innerHTML;
    totalA = input * price;
    totalPrice += totalA;
  }
  var cartTotal = document.querySelector(".price-total span");
  var totalPrices;

  totalPrices = totalPrice.toFixed(3);

  cartTotal.innerHTML = totalPrices;
  inputchange();
  deleteCart();
}

//Remove--------------------------------------------------
function deleteCart() {
  var cartItem = document.querySelectorAll("tbody tr");

  for (var i = 0; i < cartItem.length; i++) {
    var productT = document.querySelectorAll(".cart-delete");

    productT[i].addEventListener("click", function (event) {
      var cartDelete = event.target;
      var cartItem1 = cartDelete.parentElement.parentElement;
      cartItem1.remove();
      cartTotal();
    });
  }
}

function inputchange() {
  var cartItem = document.querySelectorAll("tbody tr");
  for (var i = 0; i < cartItem.length; i++) {
    var inputV = cartItem[i].querySelector("input");
    inputV.addEventListener("change", function () {
      cartTotal();
    });
  }
}

//---------
