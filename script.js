let cart = [];

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const cartItems = document.getElementById('cart-items');

    cartCount.textContent = cart.length;

    let total = 0;
    cartItems.innerHTML = '';
    cart.forEach(item => {
        total += item.price;
        const cartItem = document.createElement('div');
        cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = total.toFixed(2);
}

function addToCart(productId) {
    const products = [
        { id: 1, name: 'Product 1', price: 19.99 },
        { id: 2, name: 'Product 2', price: 29.99 },
        { id: 3, name: 'Product 3', price: 39.99 }
    ];

    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

function viewCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'flex';
}

function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'none';
}

function checkout() {
    alert('Proceeding to checkout...');
    cart = [];
    updateCart();
    closeCart();
}

document.querySelectorAll('.add-to-cart').forEach((button, index) => {
    button.addEventListener('click', () => {
        addToCart(index + 1);
    });
});
