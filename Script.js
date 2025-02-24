// Example API URL to fetch products data
const apiUrl = 'https://fakestoreapi.com/products';

const productList = document.getElementById('product-list');

// Function to fetch products and display them
function loadProducts() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Iterate through products data
            data.forEach(product => {
                const productCard = `
                    <div class="col-md-4">
                        <div class="product-card">
                            <img src="${product.image}" alt="${product.title}">
                            <div class="product-card-body">
                                <h5>${product.title}</h5>
                                <p>$${product.price}</p>
                                <button class="btn btn-primary" onclick="addToCart(${product.id}, '${product.title}', ${product.price})">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                `;
                productList.innerHTML += productCard;
            });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
}

// Cart functionality
let cart = [];

function addToCart(id, title, price) {
    const product = { id, title, price };
    cart.push(product);
    document.getElementById('cart-count').innerText = cart.length;
    alert(`${title} added to cart!`);
}

// Function to handle active navigation link
function setActive(linkId) {
    // Remove the active class from all links
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.classList.remove('active');
    });

    // Add the active class to the clicked link
    document.getElementById(linkId).classList.add('active');

    // Change navbar background color when a link is clicked
    document.getElementById('navbar').classList.add('bg-active');
}

// Load products when page loads
window.onload = loadProducts;
