/*Preview products*/
let previewContainer = document.querySelector('.products-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product => {
    product.onClick = () => {
        let name = product.getAttribute('data-name');
    };
});




















