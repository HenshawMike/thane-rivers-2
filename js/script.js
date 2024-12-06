document.addEventListener('DOMContentLoaded', () => {
    // Image Gallery
    const mainImage = document.querySelector('.main-image img');
    const thumbnails = document.querySelectorAll('.thumbnail-container img');
    const prevButton = document.querySelector('.gallery-nav.prev');
    const nextButton = document.querySelector('.gallery-nav.next');
  
    let currentImageIndex = 0;
  
    function updateMainImage(index) {
      thumbnails.forEach(thumb => thumb.classList.remove('active'));
      thumbnails[index].classList.add('active');
      mainImage.src = thumbnails[index].src.replace('100&width=100', '600&width=600');
      mainImage.alt = thumbnails[index].alt;
    }
  
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', () => {
        currentImageIndex = index;
        updateMainImage(currentImageIndex);
      });
    });
  
    prevButton.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex - 1 + thumbnails.length) % thumbnails.length;
      updateMainImage(currentImageIndex);
    });
  
    nextButton.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex + 1) % thumbnails.length;
      updateMainImage(currentImageIndex);
    });
  
    // Quantity Selector
    
  
    // Add to Cart functionality
    const addToCartButton = document.querySelector('.add-to-cart');
    const shopPayButton = document.querySelector('.shop-pay');
    const moreOptionsButton = document.querySelector('.more-options');
    const cartCount = document.getElementById("cart-count")
    

    
  
    
  
    
  
    // Keyboard accessibility for gallery navigation
    mainImage.parentElement.setAttribute('tabindex', '0');
    mainImage.parentElement.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        prevButton.click();
      }else if (e.key === 'ArrowRight')  {
        nextButton.click();
      }
    });
});
document.addEventListener('DOMContentLoaded', () => {
  const quantityInput = document.getElementById('quantity');
  const decreaseBtn = document.getElementById('decrease');
  const increaseBtn = document.getElementById('increase');
  const addToCartBtn = document.getElementById('add-to-cart');
  const cartDropdown = document.getElementById('cart-dropdown');
  const closeBtn = document.querySelector('.close-btn');
  const cartQuantity = document.getElementById('cart-quantity');
  const cartCount = document.getElementById('cart-count');
  const viewCartBtn = document.getElementById('view-cart');
  const continueShoppingBtn = document.getElementById('continue-shopping');

  let cartItems = 0;

  decreaseBtn.addEventListener('click', () => {
      if (quantityInput.value > 1) {
          quantityInput.value = parseInt(quantityInput.value) - 1;
          
      }
  });

  increaseBtn.addEventListener('click', () => {
      quantityInput.value = parseInt(quantityInput.value) + 1;
      
  });

  addToCartBtn.addEventListener('click', () => {
      const quantity = parseInt(quantityInput.value);
      cartItems += quantity;
      cartQuantity.textContent = quantity;
      cartCount.textContent = cartItems;
      cartDropdown.style.display = 'block';
      
  });

  closeBtn.addEventListener('click', () => {
      cartDropdown.style.display = 'none';
  });

  viewCartBtn.addEventListener('click', () => {
      cartDropdown.style.display = 'none';
  });

  continueShoppingBtn.addEventListener('click', () => {
      cartDropdown.style.display = 'none';
   
        
  });
      
});



