const cart = JSON.parse(localStorage.getItem('cart')) || [];
const list = document.querySelector('#products');

function fillCardList() {
    let total = 0;

    cart.forEach(element => {
        let row = document.createElement('tr');
        let rowTotal = element.amount * element.price * 100 / 100;
        total += rowTotal;

        row.innerHTML = `
            <td class="card-table-item" >${element.name}</td>
            <td class="card-table-amount"><button onclick="addToCard('${element.name}', '${element.price}'); location.reload();" class="add-btn">+</button>
                <strong>${element.amount}<strong>
                <button onclick="removeFromCart('${element.name}'); location.reload();" class="remove-btn">-</button>
            </td>
            <td class="card-table-price">${element.price}</td>
            <td class="card-table-total">${rowTotal.toFixed(2)}</td>
        `;
        list.appendChild(row);
    });

    let totalRow = document.createElement('tr');
    totalRow.innerHTML = `
        <td colspan="3"><strong>Total</strong></td>
        <td><strong>€${total.toFixed(2)}</strong></td>
    `;
    list.appendChild(totalRow);
}

function deleteCard() {
    localStorage.removeItem('cart');
    location.reload();
}

function removeFromCart(productName) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let index = cart.findIndex((element) => element.name === productName);

    if (index >= 0) {
        cart[index].amount -= 1;
        if (cart[index].amount <= 0) {
            cart.splice(index, 1);
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}

fillCardList(); 