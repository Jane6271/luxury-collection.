// Simulate loading progress
let progress = 0;
const interval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => {
            document.querySelector('.loading-screen').style.opacity = '0';
            setTimeout(() => {
                document.querySelector('.loading-screen').style.display = 'none';
                init3DShowroom();
            }, 500);
        }, 300);
    }
    document.getElementById('loading-progress').style.width = progress + '%';
}, 200);



const products = [
    { id: 1, name: "Burgundy Velvet Sofa", price: 12450, image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9a2494ec-e3f5-42f9-a792-db81091503ca.png", description: "Handcrafted in Italy with premium velvet" },
    { id: 2, name: "Executive Walnut Desk", price: 25800, image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/26f2e310-78cf-428f-992e-73b6bbffbb27.png", description: "Solid walnut with titanium inlays" },
    { id: 3, name: "Marble Sculpture Table", price: 42300, image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/65a7fd17-2eb5-464b-b3e4-c2d1df8a1456.png", description: "Hand-carved Carrara marble with gold leaf" },
    { id: 4, name: "Canopy Silk chair", price: 38700, image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3370ec4d-24a4-4e4a-ab65-e52a4bb7ef1a.png", description: "Italian silk upholstery with solid ebony" },
    { id: 5, name: " Bed with Box Storage. ", price: 12450, image: "data:image/jpeg;base64,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", description: "It has a modern aesthetic, often finished in shades like wenge or walnut, and includes a built-in storage headboard design. " },
    { id: 6, name: "Velet Maro arxivlari", price: 25800, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTqGiO_Cq1bf4RzlnltBMb6x1bIh72Lfy7Qw&s", description: "sofa for your living space is crucial to ensuring that it complements your home decor and enhances the overall ambiance." },
    { id: 7, name: "This is a Sierra Coffee Table. ", price: 42300, image: "data:image/jpeg;base64,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", description: "The image displays a uniquely designed coffee table known as the Sierra Coffee Table." },
    { id: 8, name: "Office Interior Design", price: 12450, image: "https://eclectic-niche.com/wp-content/uploads/home_office__-1024x574.png", description: "what your colleagues wants and incorporating it into a flexible space. Because at comfortable offices" },
    { id: 9, name: "Royal modern bed", price: 25800, image: "https://cdn.homedit.com/wp-content/uploads/2014/03/designer-Fabio-Vinella-has-designed-the-HiBed.jpg", description: "This expansive suite rises high above it all and features " },
    { id: 10, name: "Pushing Creative Boundaries", price: 42300, image: "https://cdn.shopify.com/s/files/1/0685/4406/9950/files/concept-003_1024x1024.jpg?v=1716600026", description: "conceptual furniture opens up a realm of aesthetic and intellectual possibilities." },
    { id: 11, name: " Reflecting  gold design", price: 38700, image: "https://cdn.shopify.com/s/files/1/0685/4406/9950/files/concept-005_1024x1024.jpg?v=1716600026", description: " One of the hottest trends in conceptual furniture is the focus on sustainability." },
    { id: 12, name: "Trends in Conceptual Furniture Design", price: 12450, image: "https://cdn.shopify.com/s/files/1/0685/4406/9950/files/concept-014_1024x1024.jpg?v=1716600024", description: "creating pieces that are as sustainable as they are stylish." },
    { id: 13, name: "The Essence of Conceptual Furniture Design", price: 25800, image: "https://cdn.shopify.com/s/files/1/0685/4406/9950/files/concept-012_1024x1024.jpg?v=1716600025", description: "At its core, conceptual furniture design is an exploration of possibilities. " },
    { id: 14, name: "Technological Integration", price: 42300, image: "https://cdn.shopify.com/s/files/1/0685/4406/9950/files/concept-004_1024x1024.jpg?v=1716600025", description: "furniture designers are increasingly incorporating technology into their designs." },
    { id: 15, name: "deep seet comfy", price: 38700, image: "https://ak1.ostkcdn.com/images/products/is/images/direct/4b3785d5004b6b115a764f18f81ee89c39161502/Corduroy-Upholstered-Deep-Seat-Comfy-Sofa%26Couches-with-Solid-Wood-Legs-for-Living-Room.jpg", description: "Corduroy Upholstered Deep Seat Comfy Sofa&Couches with Solid Wood Legs " }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const galleryEl = document.getElementById("gallery");
const cartSidebar = document.getElementById("cartSidebar");
const cartToggleBtn = document.getElementById("cartToggleBtn");
const cartCloseBtn = document.getElementById("cartCloseBtn");

function renderGallery() {
    galleryEl.innerHTML = products.map(p => `
      <article class="gallery-item" data-id="${p.id}">
        <img src="${p.image}" alt="${p.name}" />
        <div class="item-info">
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <div class="price">$${p.price.toLocaleString()}</div>
          <button class="add-to-cart-btn" data-id="${p.id}">Add to Cart</button>
        </div>
      </article>
    `).join('');
}

function renderCart() {
    if (cart.length === 0) {
        cartSidebar.querySelector('#cartItems').innerHTML = '<p style="text-align:center; margin-top:2rem;">Your cart is empty.</p>';
        cartSidebar.querySelector('#cartTotal').textContent = "Total: $0.00";
        cartToggleBtn.textContent = "Cart (0)";
        return;
    }
    cartSidebar.querySelector('#cartItems').innerHTML = cart.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <img src="${item.image}" alt="${item.name}" />
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p>$${item.price.toLocaleString()}</p>
          <div class="cart-item-qty">
            <button class="qty-btn" data-id="${item.id}" data-action="decrease">-</button>
            <span>${item.quantity}</span>
            <button class="qty-btn" data-id="${item.id}" data-action="increase">+</button>
          </div>
        </div>
      </div>
    `).join('');
    const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
    cartSidebar.querySelector('#cartTotal').textContent = `Total: $${total.toLocaleString()}`;
    const totalQty = cart.reduce((sum, i) => sum + i.quantity, 0);
    cartToggleBtn.textContent = `Cart (${totalQty})`;
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    const cartItem = cart.find(i => i.id === id);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    renderCart();
}

function updateQuantity(id, action) {
    const cartItem = cart.find(i => i.id === id);
    if (!cartItem) return;
    if (action === "increase") {
        cartItem.quantity++;
    } else if (action === "decrease") {
        cartItem.quantity--;
        if (cartItem.quantity <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
    }
    saveCart();
    renderCart();
}

document.body.addEventListener('click', e => {
    if (e.target.classList.contains('add-to-cart-btn')) {
        addToCart(parseInt(e.target.dataset.id));
    }
    if (e.target.classList.contains('qty-btn')) {
        updateQuantity(parseInt(e.target.dataset.id), e.target.dataset.action);
    }
});

cartToggleBtn.addEventListener('click', () => {
    cartSidebar.classList.toggle('open');
});

cartCloseBtn.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
});

document.getElementById('sidebarToggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('sidebar-collapsed');
    document.body.classList.toggle('sidebar-collapsed');
});

renderGallery();
renderCart();

