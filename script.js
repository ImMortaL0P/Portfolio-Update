document.addEventListener('DOMContentLoaded', () => {
    const cart = [];

    document.querySelectorAll('.product button').forEach(button => {
        button.addEventListener('click', event => {
            const product = event.target.closest('.product');
            const productName = product.querySelector('h3').textContent;
            const productPrice = product.querySelector('p').textContent;

            cart.push({ name: productName, price: productPrice });
            console.log(cart);
        });
    });
});
