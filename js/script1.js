let giohang = JSON.parse(localStorage.getItem("cart")) || [];

/* SAVE */
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(giohang));
}

/* ADD CART */
function addcart(product) {
  const exist = giohang.find((item) => item.id === product.id);

  if (exist) {
    exist.qtt += product.qtt;
  } else {
    giohang.push(product);
  }

  saveCart();
  renderCart();
  updateCartCount();

  alert("Add to cart successfully");
}

/* RENDER CART */
function renderCart() {
  const tbody = document.getElementById("ttgiohang");
  if (!tbody) return;

  tbody.innerHTML = "";

  giohang.forEach((item, index) => {
    tbody.innerHTML += `
      <tr>
        <td style="display:flex;align-items:center;gap:10px;">
          <img src="${item.img}" width="70">
          <span>${item.name}</span>
        </td>

        <td>$<span class="price">${item.price}</span></td>

        <td>
          <input type="number" min="1" value="${item.qtt}" data-index="${index}" class="qty">
        </td>

        <td>
          <span class="delete" data-index="${index}" style="cursor:pointer;">Remove</span>
        </td>
      </tr>
    `;
  });

  bindEvents();
  cartTotal();
}

/* EVENTS */
function bindEvents() {
  document.querySelectorAll(".delete").forEach((btn) => {
    btn.onclick = () => {
      const index = btn.dataset.index;
      giohang.splice(index, 1);
      saveCart();
      renderCart();
      updateCartCount();
    };
  });

  document.querySelectorAll(".qty").forEach((input) => {
    input.onchange = () => {
      const index = input.dataset.index;
      giohang[index].qtt = parseInt(input.value);
      saveCart();
      cartTotal();
    };
  });
}

/* TOTAL */
function cartTotal() {
  let total = 0;

  giohang.forEach((item) => {
    total += item.price * item.qtt;
  });

  const el = document.querySelector(".price-total span");
  if (el) el.innerText = total.toFixed(2);
}

/* COUNT */
function updateCartCount() {
  const el = document.getElementById("addnumber");
  if (el) el.innerText = giohang.length;
}

/* INIT */
function loaddatacart() {
  renderCart();
  updateCartCount();
}

loaddatacart();
