
// COMMON JAVASCRIPT FOR ALL PAGES


// Initialize AOS Animation
AOS.init({ duration: 800, once: true });

// Navbar scroll effect - Same size hamesha
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar-custom');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});

// VALIDATION FUNCTIONS


function validateAlpha(s) { 
  return /^[A-Za-z\s]+$/.test(s.trim()); 
}

function validatePhone(p) { 
  return /^\d{11}$/.test(p); 
}

function validateEmail(e) { 
  return /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/.test(e); 
}


// RESERVATION FORM (if exists on page)


const reservationForm = document.getElementById('reservationForm');
if (reservationForm) {
  reservationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('resName');
    const phone = document.getElementById('resPhone');
    const email = document.getElementById('resEmail');
    let valid = true;
    
    [name, phone, email].forEach(f => f.classList.remove('is-invalid'));
    
    if (!validateAlpha(name.value)) { 
      name.classList.add('is-invalid'); 
      valid = false; 
    }
    if (!validatePhone(phone.value)) { 
      phone.classList.add('is-invalid'); 
      valid = false; 
    }
    if (!validateEmail(email.value)) { 
      email.classList.add('is-invalid'); 
      valid = false; 
    }
    
    const msg = document.getElementById('resMessage');
    if (valid) { 
      msg.innerHTML = '<div class="alert alert-success">Reservation confirmed! We\'ll contact you soon.</div>'; 
      reservationForm.reset(); 
      setTimeout(() => msg.innerHTML = '', 4000); 
    } else { 
      msg.innerHTML = '<div class="alert alert-danger">Please fix errors: Name (alphabets only), 11-digit phone, valid email.</div>'; 
    }
  });
}


// FEEDBACK FORM (if exists on page)


const feedbackForm = document.getElementById('feedbackForm');
if (feedbackForm) {
  feedbackForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('fbName');
    const email = document.getElementById('fbEmail');
    let valid = true;
    
    name.classList.remove('is-invalid');
    email.classList.remove('is-invalid');
    
    if (!validateAlpha(name.value)) { 
      name.classList.add('is-invalid'); 
      valid = false; 
    }
    if (!validateEmail(email.value)) { 
      email.classList.add('is-invalid'); 
      valid = false; 
    }
    
    const msg = document.getElementById('fbMessageSuccess');
    if (valid) { 
      msg.innerHTML = '<div class="alert alert-success">Thank you for your valuable feedback!</div>'; 
      feedbackForm.reset(); 
      setTimeout(() => msg.innerHTML = '', 4000); 
    } else { 
      msg.innerHTML = '<div class="alert alert-danger">Please fix errors: Name (alphabets only), valid email.</div>'; 
    }
  });
}


// Menu Items Data
const menuItems = [
  { name: "Chicken Seekh Kabab", desc: "Minced chicken with aromatic spices, grilled to perfection on charcoal.", price: "450", category: "BBQ", img: "images/download.jpg" },
  { name: "Garlic Naan", desc: "Soft naan bread topped with fresh garlic, cilantro and butter.", price: "120", category: "Bread", img: "images/Everyone may have a different interpretation of….jpg" },
  { name: "Fish Tikka", desc: "Spiced boneless fish fillet, chargrilled to smoky perfection.", price: "750", category: "BBQ", img: "images/Spicy Fish Tikka (Air-Fried or Grilled).jpg" },
  { name: "Daal Makhni", desc: "Creamy black lentils cooked overnight with butter and cream.", price: "450", category: "Main Course", img: "images/🍛✨ Dal Makhani – Creamy, Smoky, and Full of….jpg" },
  { name: "Chicken Pizza", desc: "Wood-fired pizza with spicy chicken, bell peppers, olives and mozzarella.", price: "890", category: "Pizza", img: "images/pizza-with-extra-cheese-dried-herbs.jpg" },
  { name: "Beef Burger", desc: "Juicy beef patty with lettuce, tomato, cheese and special sauce.", price: "650", category: "Burger", img: "images/This juicy beef burger is loaded with cheese and….jpg" },
  { name: "Creamy Pasta", desc: "Fettuccine in creamy Alfredo sauce with mushrooms and herbs.", price: "590", category: "Pasta", img: "images/Creamy Penne Pasta - Recipessin.jpg" },
  { name: "Caesar Salad", desc: "Fresh romaine lettuce, croutons, parmesan with Caesar dressing.", price: "480", category: "Salad", img: "images/How to make a Vegan Caesar Salad including the….jpg" },
  { name: "Grilled  Cheese Sandwich", desc: "Crispy golden-brown grilled sandwich with melted cheese inside, perfectly toasted bread for a delicious crunchy bite.", price: "520", category: "Sandwich", img: "images/A crispy, golden-brown grilled cheese sandwich….jpg" },
  { name: "Zinger Burger", desc: "Crispy fried chicken fillet with spicy mayo and lettuce.", price: "580", category: "Burger", img: "images/High quality food photography of a Zinger style….jpg" },
  { name: "Chicken Broast", desc: "Crispy fried chicken served with fries and coleslaw.", price: "690", category: "Fast Food", img: "images/Discover the most mouth-watering Southern Fried….jpg" },
  { name: "Lasagna", desc: "Layers of pasta, meat sauce, béchamel and melted cheese.", price: "790", category: "Pasta", img: "images/Lazanya 🍝🍷.jpg" },
  { name: "French Fries", desc: "Crispy golden fries served with ketchup and mayo.", price: "250", category: "Appetizer", img: "images/french-fries-with-mayonnaise-ketchup.jpg" },
  { name: "Sushi Platter", desc: "Assorted fresh sushi rolls with soy sauce and wasabi.", price: "1250", category: "Japanese", img: "images/A colorful sushi spread with nigiri, sashimi, and….jpg" },
  { name: "Tomato Soup", desc: "Creamy tomato soup with croutons and fresh herbs.", price: "320", category: "Soup", img: "images/This Roasted Red Pepper and Tomato Soup Recipe….jpg" },
  { name: "Grilled Steak", desc: "Premium beef steak with mashed potatoes and vegetables.", price: "1650", category: "Steak", img: "images/Juicy Grilled Steak with Roasted Vegetables and Zesty Lemon-Herb Sauce.jpg" },
  { name: "Coffee", desc: "Rich aromatic brewed coffee with cream on side.", price: "280", category: "Beverages", img: "images/Caffe Mocha Magic for Chocolate Coffee Lovers….jpg" },
  { name: "Tea", desc: "Traditional Pakistani chai with cardamom and milk.", price: "150", category: "Beverages", img: "images/Qatar’s most loved tea—strong black tea brewed….jpg" },
  { name: "Ice Cream", desc: "Creamy vanilla, chocolate or strawberry ice cream.", price: "220", category: "Dessert", img: "images/Three different ice cream sundaes are presented in….jpg" },
  { name: "Zafrani Kheer", desc: "Traditional rice pudding infused with saffron and nuts.", price: "290", category: "Dessert", img: "images/A slow-cooked rice pudding infused with saffron….jpg" },
  { name: "Pancake", desc: "Fluffy pancakes served with maple syrup and butter.", price: "390", category: "Breakfast", img: "images/A mouth-watering image of a (stack of fluffy….jpg" },
  { name: "Brownie", desc: "Warm chocolate brownie with vanilla ice cream.", price: "380", category: "Dessert", img: "images/Um brownie de chocolate é uma obra de arte….jpg" },
  { name: "Lava Cake", desc: "Decadent chocolate lava cake with molten center, served with ice cream.", price: "450", category: "Dessert", img: "images/The aroma of warm, rich chocolate wafting through….jpg" },
  { name: "Chocolate Donuts", desc: "Freshly baked donuts with chocolate glaze.", price: "280", category: "Dessert", img: "images/22 Sweet Valentine Donut Ideas That Look….jpg" },
  { name: "Orange Juice", desc: "Freshly squeezed orange juice, no added sugar.", price: "240", category: "Beverages", img: "images/Renjith Ramesan _ Orange juice done for @domeskw….jpg" },
  { name: "Pineapple Milkshake", desc: "Creamy milkshake with fresh pineapple chunks.", price: "320", category: "Beverages", img: "images/Bring a taste of the tropics to your kitchen with….jpg" },
  { name: "Cold Drink", desc: "Chilled soft drink (Coke, Sprite or Fanta).", price: "150", category: "Beverages", img: "images/🍊Три ярких визуала — Sprite, Coca-Cola и Fanta —….jpg" }
];

// Build Menu Function
function buildMenu() {
  const container = document.getElementById('menuContainer');
  if (!container) return;
  container.innerHTML = '';
  menuItems.forEach(item => {
    container.innerHTML += `
      <div class="col-lg-4 col-md-6">
        <div class="menu-card" data-name="${item.name.replace(/"/g, '&quot;')}" data-desc="${item.desc.replace(/"/g, '&quot;')}" data-price="${item.price}" data-img="${item.img}">
          <div class="position-relative"><img src="${item.img}" class="menu-img" alt="${item.name}" onerror="this.src='https://placehold.co/600x400/f5e6d3/b8860b?text=${encodeURIComponent(item.name)}'"><span class="menu-badge">${item.category}</span></div>
          <div class="menu-content"><h5 class="menu-title">${item.name}</h5><p class="menu-desc">${item.desc.substring(0, 55)}...</p><span class="menu-price">₨ ${item.price}</span></div>
        </div>
      </div>
    `;
  });
}

// Menu Modal
function initMenuModal() {
  if (!document.getElementById('menuModal')) {
    const modalHtml = `<div class="modal fade" id="menuModal" tabindex="-1"><div class="modal-dialog modal-dialog-centered"><div class="modal-content"><div class="modal-header border-0"><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div><div class="modal-body text-center pb-4"><img id="modalImg" src="" class="img-fluid rounded-3 mb-3" style="max-height: 250px;"><h3 id="modalName" class="mb-2"></h3><p id="modalDesc" class="text-muted"></p><h2 class="menu-price mt-3">₨ <span id="modalPrice"></span></h2></div></div></div></div>`;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
  }
  
  document.addEventListener('click', function(e) {
    const card = e.target.closest('.menu-card');
    if (card) {
      document.getElementById('modalName').innerText = card.getAttribute('data-name');
      document.getElementById('modalDesc').innerText = card.getAttribute('data-desc');
      document.getElementById('modalPrice').innerText = card.getAttribute('data-price');
      document.getElementById('modalImg').src = card.getAttribute('data-img');
      new bootstrap.Modal(document.getElementById('menuModal')).show();
    }
  });
}


// GALLERY PAGE FUNCTIONS (if on gallery.html)


const galleryImages = [
  "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600"
];

function buildGallery() {
  const container = document.getElementById('galleryContainer');
  if (!container) return;
  container.innerHTML = '';
  galleryImages.forEach((img, i) => {
    container.innerHTML += `<div class="gallery-item"><img src="${img}" alt="Gallery"><div class="gallery-overlay"><h5>Gourmet Experience</h5><p class="mb-0 small">Saffron Terrace Pakistan</p></div></div>`;
  });
}


// RUN PAGE SPECIFIC FUNCTIONS


// Menu page
if (document.getElementById('menuContainer')) {
  buildMenu();
  initMenuModal();
}

// Gallery page
if (document.getElementById('galleryContainer')) {
  buildGallery();
}