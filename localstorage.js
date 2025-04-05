var storage = JSON.parse(localStorage.getItem("cart"));

if (storage != null) {
  giohang = storage;
} else {
  var giohang = [];
}
const btn = document.querySelectorAll("button");
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
      addcart(price, name, img, qtt);
    }
  });
});
function showcart() {
  // var addtr = document.createElement("tr");
  var storage = JSON.parse(localStorage.getItem("cart"));

  if (storage != null) {
    var kq = "";
    for (let i = 0; i < storage.length; i++) {
      kq +=
        `
              <tr><td style="display: flex;align-items: center;"><img style="width:80px;"  src="` +
        storage[i]["img"] +
        `" alt=""><span class="title">` +
        storage[i]["name"] +
        `</span></td><td><p>$<span class='price'>` +
        storage[i]["price"] +
        `</span></p></td><td><input type="number" style="width:30px;outline: none;color:black;" value="` +
        storage[i]["qtt"] +
        `" min="1" max="10"></td> <td style="cursor: pointer;"><span class="cart-delete">Remove</span></td></tr><hr>`;
    }
    document.getElementById("ttgiohang").innerHTML = kq;
    //   var cartTable = document.querySelector("tbody");
    //   cartTable.append(addtr);

    //set item
    localStorage.setItem("cart", JSON.stringify(giohang));
    //save to localStorage
    var storage = JSON.parse(localStorage.getItem("cart"));

    if (storage != null) {
      document.getElementById("addnumber").innerHTML = `(${storage.length})`;
    }
  }
}
function addcart(price, name, img, qtt) {
  var addtr = document.createElement("tr");
  var cartItem = document.querySelectorAll("tbody tr");
  var pro = {
    img: img,
    name: name,
    price: price,
    qtt: qtt,
  };
  var trcontent =
    `
  <tr><td style="display: flex;align-items: center;"><img style="width:80px;"  src="` +
    img +
    `" alt=""><span class="title">` +
    name +
    `</span></td><td><p>$<span class='price'>` +
    price +
    `</span></p></td><td><input type="number" style="width:30px;outline: none;color:black;" value="` +
    qtt +
    `" min="1" max="10"></td> <td style="cursor: pointer;"><span class="cart-delete">Remove</span></td></tr><hr>`;

  for (var i = 0; i < cartItem.length; i++) {
    var productT = document.querySelectorAll(".price");
    if (productT[i].innerHTML == price) {
      alertE = "The product has been added to cart";
      alert("The product has been added to cart");
      return;
    }
  }

  addtr.innerHTML = trcontent;
  giohang.push(pro);

  alert("Add to cart successfully");
  var cartTable = document.querySelector("tbody");
  cartTable.append(addtr);
  cartTotal();
  //set item
  localStorage.setItem("cart", JSON.stringify(giohang));
  //save to localStorage
  var storage = JSON.parse(localStorage.getItem("cart"));

  if (storage != null) {
    document.getElementById("addnumber").innerHTML = `(${storage.length})`;
  }
}
// function loadcart() {
//   var storage = JSON.parse(localStorage.getItem("cart"));

//   if (storage != null) {
//     document.getElementById("addnumber").innerHTML = `(${storage.length})`;
//   }
// }

function loadsp() {
  var storage = JSON.parse(localStorage.getItem("cart"));

  if (storage != null) {
    document.getElementById("addnumber").innerHTML = `(${storage.length})`;
  }
}
function loaddatacart() {
  loadsp();
  showcart();
  cartTotal();
}

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

function deleteCart() {
  var cartItem = document.querySelectorAll("tbody tr");

  for (var i = 0; i < cartItem.length; i++) {
    var productT = document.querySelectorAll(".cart-delete");

    productT[i].addEventListener("click", function (event) {
      var cartDelete = event.target;
      var cartItem1 = cartDelete.parentElement.parentElement;
      cartItem1.remove();
      localStorage.removeItem('cart');
      cartTotal();
      loadsp();
    });
  }
}


//   var giohang = JSON.parse(localStorage.getItem("cart"));
//   // console.log(storage)
//   for (var i = 0; i < storage.length; i++) {
//     var productT = document.querySelectorAll(".cart-delete");

//     productT[i].addEventListener("click", function (event) {
//       var cartDelete = event.target;
//       var cartItem1 = cartDelete.cart;
//       localStorage.removeItem(cartItem1);
//       cartTotal();
//     });
//   }
// }

function inputchange() {
  var cartItem = document.querySelectorAll("tbody tr");
  for (var i = 0; i < cartItem.length; i++) {
    var inputV = cartItem[i].querySelector("input");
    inputV.addEventListener("change", function () {
      cartTotal();
    });
  }
}
