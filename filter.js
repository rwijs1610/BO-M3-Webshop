function filterProducten(categorie) {
    const producten = document.querySelectorAll('.product');

    producten.forEach(function (product) {
        if (product.dataset.categorie === categorie || categorie === 'alles') {
            product.style.display = 'block';
            product.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
        } else {
            product.style.display = 'none';
        }
    });
}