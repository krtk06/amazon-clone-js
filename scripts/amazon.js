// const products = [{
//     image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
//     name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
//     rating:{
//         stars:4.5,
//         count:'87'
//     },
//     price:' 4090'
// },{
//     image: 'images/products/intermediate-composite-basketball.jpg',
//     name: 'Intermediate Size Basketball',
//     rating:{
//         stars:4,
//         count:'127'
//     },
//     price:'2095'
// },{
//     image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
//     name: 'Adults Plain Cotton T-Shirt - 2 Pack',
//     rating:{
//         stars:4.5,
//         count:'56'
//     },
//     price:'7990'
// },{
//   image:'images/products/black-2-slot-toaster.jpg',
//   name: '2-Slot toaster-Black',
//     rating:{
//         stars:5,
//         count:2197
//     },
//     price:'18990'
// }];
let productHTML = '';
products.forEach((product) => {
  productHTML += `
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            RS.${(product.price).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select class = "js-dropDown">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-cartbutton" 
          data-product-id = "${product.id}">
            Add to Cart
          </button>
        </div>`;
});
document.querySelector('.js-productHTML').innerHTML = productHTML;

document.querySelectorAll('.js-cartbutton').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    
    const productContainer = button.closest('.product-container');
    const dropdown = productContainer.querySelector('.js-dropDown');
    const selectedQuantity = Number(dropdown.value);

    // console.log(`Selected quantity: ${selectedQuantity}`);
    let matchingItem = cart.find(item => item.productId === productId);

    if (matchingItem) {
      matchingItem.quantity += selectedQuantity;
    } else {
      cart.push({
        productId: productId,
        quantity: selectedQuantity
      });
    }
    let cartCount = 0;
    cart.forEach((item) => {
      cartCount += item.quantity;
    });

    document.querySelector('.js-cartQuantity').innerHTML = cartCount;
  });
});


