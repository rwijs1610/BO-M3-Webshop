function filterProducten(categorie) {
    const producten = document.querySelectorAll('.product');

    producten.forEach(function (product) {
        if (product.dataset.categorie === categorie || categorie === 'alles') {
            product.style.display = 'block';
            product.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
            console.log('block');
        } else {
            product.style.display = 'none';
            console.log('none');
        }
    });
}

const zoekbalk = document.getElementById('zoek');

zoekbalk.addEventListener('input', function () {
    console.log('Zoekterm:', zoekbalk.value);
    const zoekterm = zoekbalk.value.toLowerCase();
    const producten = document.querySelectorAll('.product');

    producten.forEach(function (product) {
        const naam = product.querySelector('.product-title').textContent.toLowerCase();
        if (naam.includes(zoekterm)) {
            product.style.display = 'block';
            product.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
        } else {
            product.style.display = 'none';
        }
    });
});

// Add event listeners to filter buttons to change color when pressed
const filterButtons = document.querySelectorAll('.filter-button');

filterButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
    });
});

// Set "alles" button as active by default on page load
document.querySelector('button[onclick*="alles"]').classList.add('active');

function addToCard(productName, price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    let index = cart.findIndex((element) => element.name === productName);

    if (index >= 0) {
        cart[index].amount += 1;
    } else {
        cart.push({
            name: productName,
            amount: 1,
            price: price
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}