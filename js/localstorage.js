let giohang = JSON.parse(localStorage.getItem("cart")) || [];

/* =========================
   ADD TO CART
========================= */
const addButtons = document.querySelectorAll(".button button");

addButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const product = event.target.closest(".items");

    const img = product.querySelector(".image img").src;
    const name = product.querySelector(".text h4").textContent.trim();
    const price = parseFloat(product.querySelector(".text span").textContent);

    addcart({
      id: name,
      img,
      name,
      price,
      qtt: 1,
    });
  });
});

/* =========================
   SAVE LOCAL STORAGE
========================= */
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(giohang));
}

/* =========================
   UPDATE CART COUNT
========================= */
function updateCartCount() {
  const addnumber = document.getElementById("addnumber");

  if (addnumber) {
    addnumber.innerHTML = `(${giohang.length})`;
  }
}

/* =========================
   ADD PRODUCT
========================= */
function addcart(product) {
  const existingProduct = giohang.find((item) => item.id === product.id);

  if (existingProduct) {
    existingProduct.qtt += 1;
    alert("Product quantity updated");
  } else {
    giohang.push(product);
    alert("Add to cart successfully");
  }

  saveCart();
  showcart();
  cartTotal();
  updateCartCount();
}

/* =========================
   SHOW CART
========================= */
function showcart() {
  const tbody = document.getElementById("ttgiohang");

  if (!tbody) return;

  let html = "";

  giohang.forEach((item, index) => {
    html += `
      <tr>
        <td style="display:flex;align-items:center;gap:10px;">
          <img style="width:80px;" src="${item.img}" alt="">
          <span class="title">${item.name}</span>
        </td>

        <td>
          $<span class="price">${item.price}</span>
        </td>

        <td>
          <input 
            type="number"
            min="1"
            value="${item.qtt}"
            data-index="${index}"
            class="cart-qtt"
            style="width:60px;"
          >
        </td>

        <td>
          <span 
            class="cart-delete"
            data-index="${index}"
            style="cursor:pointer;"
          >
            Remove
          </span>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;

  deleteCart();
  inputchange();
}

/* =========================
   TOTAL PRICE
========================= */
function cartTotal() {
  let total = 0;

  giohang.forEach((item) => {
    total += item.price * item.qtt;
  });

  const totalElement = document.querySelector(".price-total span");

  if (totalElement) {
    totalElement.innerHTML = total.toFixed(3);
  }
}

/* =========================
   DELETE PRODUCT
========================= */
function deleteCart() {
  const deleteButtons = document.querySelectorAll(".cart-delete");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const index = event.target.dataset.index;

      giohang.splice(index, 1);

      saveCart();
      showcart();
      cartTotal();
      updateCartCount();
    });
  });
}

/* =========================
   CHANGE QUANTITY
========================= */
function inputchange() {
  const quantityInputs = document.querySelectorAll(".cart-qtt");

  quantityInputs.forEach((input) => {
    input.addEventListener("change", (event) => {
      const index = event.target.dataset.index;

      let value = parseInt(event.target.value);

      if (value < 1 || isNaN(value)) {
        value = 1;
      }

      giohang[index].qtt = value;

      saveCart();
      cartTotal();
    });
  });
}

/* =========================
   LOAD DATA
========================= */
function loaddatacart() {
  updateCartCount();
  showcart();
  cartTotal();
}

loaddatacart();
