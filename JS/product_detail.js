// NAVBAR
function showSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex' 
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none' 
}
// NAVBAR END

const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get("productName");
const donatorLocation = urlParams.get("donatorLocation");
const donatorAddress = urlParams.get("donatorAddress");
const productCategory = urlParams.get("productCategory");
const conditionStar = parseInt(urlParams.get("conditionStar"));
const productDescription = urlParams.get("productDescription");
const productAmount = parseInt(urlParams.get("productAmount"));
const productImage = urlParams.get("productImage");

const detailProductImg = document.querySelector(".detail_product_img");
const detailProductName = document.querySelector(".detail_product_name");
const detailProductDescrition = document.querySelector(
  ".detail_product_description"
);
const detailProductStar = document.querySelector(
  ".product_detail_star_content"
);
const detailProductAmount = document.querySelector(".display_amount_button");
const detailDonatorAddress = document.querySelector(".donator_address");
const detailProductLocation = document.querySelector(".product_locaton_detail_button");
const detailProductCategory = document.querySelector(".product_category_detail_button");

detailProductImg.innerHTML = `<img src="${productImage}" alt="">`;
detailProductName.innerHTML = productName;
detailProductDescrition.innerHTML = productDescription;

let starIconsCondition = "";
for (let i = 0; i < conditionStar; i++) {
    starIconsCondition += '<div class="star_logo"></div>';
}
detailProductStar.innerHTML = starIconsCondition;
detailProductAmount.innerHTML = productAmount;
detailDonatorAddress.innerHTML = `<span>Donator Address:</span> ${donatorAddress}`;;
detailProductLocation.innerHTML = donatorLocation;
detailProductCategory.innerHTML = productCategory;

// plus minus button
const maxAmount = productAmount; 
const amountContainers = document.querySelectorAll('.display_amount_button');
amountContainers.forEach(container => {
    let amount = parseInt(container.textContent);

    const minusButton = container.previousElementSibling;
    const plusButton = container.nextElementSibling;

    minusButton.addEventListener('click', () => {
        if (amount > 1) { // Jumlah minimum diatur ke 1
            amount--;
            container.textContent = amount;
        }
    });

    plusButton.addEventListener('click', () => {
        if (amount < maxAmount) {
            amount++;
            container.textContent = amount;
        }
    });
});

// cart
const cartButton = document.querySelector(".view_cart_button");
const cartContainer = document.querySelector(".view_cart_container");
const cartContent = document.querySelectorAll(".cart");
cartButton.addEventListener("click", function(){
    cartContainer.style.display = "flex";
});
// close button
const cartCloseButton = document.querySelector(".close_icon_cart");
cartCloseButton.addEventListener("click", function(){
    cartContainer.style.display = "none";
});
// click diluar cart
cartContainer.addEventListener("click", (e) => {
    if (e.target === cartContainer) {
        cartContainer.style.display = "none";
    }
  });

// check out button

const checkOutButton = document.querySelector(".check_out_button");
checkOutButton.addEventListener("click", function(){
    window.location.href = "../HTML/checkout.html"
});
// add to cart
const addToCartButton = document.querySelector(".add_to_cart_button");
const addedCart = document.querySelector(".added_alert");
addToCartButton.addEventListener("click", function(){
    addedCart.style.display = 'flex';
    addedCart.innerHTML = `<div class="add_cart_logo"></div>${productName} added to your cart!`;

    setTimeout(function() {
        addedCart.style.display = 'none';
    }, 2000);

});
// view all item
const viewAllButton = document.querySelector(".view_all_item_button");
viewAllButton.addEventListener("click", function(){
    window.location.href = "../HTML/product.html";
});
detailProductLocation.addEventListener("click", function(){
    window.location.href = "../HTML/product.html";
});
detailProductCategory.addEventListener("click", function(){
    window.location.href = "../HTML/product.html";
});

// more products
const products = [
  {
    productName: "PC Case",
    donatorLocation: "Jakarta",
    donatorAddress: "Jl. Duren Sawit No. 123, Jakarta",
    productCategory: "Electronics",
    conditionStar: 3,
    productDescription:
      "Used PC case with some scratches & signs of wear, but still fully functional. Suitable for building a budget PC or as a replacement case.",
    productAmount: 1,
    productImage: "../ASSET/product-image/product-1.jpg",
  },
  {
    productName: "Jeans",
    donatorLocation: "Bandung",
    donatorAddress: "Jl. Cihampelas No. 456, Bandung",
    productCategory: "Clothing & Accessories",
    conditionStar: 4,
    productDescription:
      "Used jeans in good condition, no tears or major defects. Perfect for casual wear & comfortable for daily use. Fits well & is very stylish.",
    productAmount: 3,
    productImage: "../ASSET/product-image/product-2.jpg",
  },
  {
    productName: "Shorts",
    donatorLocation: "Surabaya",
    donatorAddress: "Jl. Raya Surabaya Barat No. 789, Surabaya",
    productCategory: "Clothing & Accessories",
    conditionStar: 4,
    productDescription:
      "Used shorts in very good condition, stylish & comfortable for casual outings or lounging at home. Durable fabric with no visible stains or damage.",
    productAmount: 1,
    productImage: "../ASSET/product-image/product-3.jpg",
  },
  {
    productName: "Phone",
    donatorLocation: "Yogyakarta",
    donatorAddress: "Jl. Malioboro No. 101, Yogyakarta",
    productCategory: "Electronics",
    conditionStar: 5,
    productDescription:
      "Used phone in excellent condition, all functions work perfectly. Great for a secondary device or as a budget-friendly option. Comes with charger & box.",
    productAmount: 1,
    productImage: "../ASSET/product-image/product-4.jpg",
  },
  {
    productName: "Wall Clock",
    donatorLocation: "Semarang",
    donatorAddress: "Jl. Pahlawan No. 11, Semarang",
    productCategory: "Home & Furniture",
    conditionStar: 4,
    productDescription:
      "Used wall clock, still functioning well with a classic design. Adds a touch of vintage charm to any room. Battery-operated & easy to install.",
    productAmount: 1,
    productImage: "../ASSET/product-image/product-5.jpg",
  },
  {
    productName: "Mattress",
    donatorLocation: "Bali",
    donatorAddress: "Jl. Sunset Road No. 789, Bali",
    productCategory: "Home & Furniture",
    conditionStar: 3,
    productDescription:
      "Used mattress with some stains, but still very comfortable & supportive. Ideal for a guest room or temporary use. Standard queen size.",
    productAmount: 1,
    productImage: "../ASSET/product-image/product-6.jpg",
  },
  {
    productName: "Shirt",
    donatorLocation: "Jakarta",
    donatorAddress: "Jl. Sudirman No. 456, Jakarta",
    productCategory: "Clothing & Accessories",
    conditionStar: 4,
    productDescription:
      "Used shirt in good condition, suitable for both formal & casual events. Comfortable fabric, well-fitting, & easy to match with different outfits.",
    productAmount: 2,
    productImage: "../ASSET/product-image/product-7.jpg",
  },
  {
    productName: "Suitcase",
    donatorLocation: "Bandung",
    donatorAddress: "Jl. Merdeka No. 101, Bandung",
    productCategory: "Clothing & Accessories",
    conditionStar: 5,
    productDescription:
      "Used suitcase in excellent condition, spacious & durable. Perfect for long trips & frequent travelers. Smooth wheels & secure locks.",
    productAmount: 1,
    productImage: "../ASSET/product-image/product-8.jpg",
  },
];


// display more items
const contentContainer = document.querySelector(".content_container");
products.forEach((product) => {
  const content = document.createElement("div");
  content.classList.add("content");

  // Generate star icons HTML
  let starIconsHTML = "";
  for (let i = 0; i < product.conditionStar; i++) {
    starIconsHTML += '<div class="star_logo"></div>';
  }

  // Create link to detail page with product data
  content.innerHTML = `
        <a href="../HTML/product_detail.html?productName=${encodeURIComponent(
          product.productName
        )}&donatorLocation=${encodeURIComponent(
    product.donatorLocation
  )}&donatorAddress=${encodeURIComponent(
    product.donatorAddress
  )}&productCategory=${encodeURIComponent(
    product.productCategory
  )}&conditionStar=${
    product.conditionStar
  }&productDescription=${encodeURIComponent(
    product.productDescription
  )}&productAmount=${product.productAmount}&productImage=${encodeURIComponent(
    product.productImage
  )}">
            <div class="product_image">
                <img src="${product.productImage}" alt="${product.productName}">
            </div>
            <div class="product_title">
                <div class="product_name_content">${product.productName}</div>
                <div class="price_content">Free</div>
            </div>
            <div class="product_star_content">
                ${starIconsHTML}
            </div>
            <div class="description_content">
                <div class="product_locaton_button">${
                  product.donatorLocation
                }</div>
                <div class="product_category_button">${
                  product.productCategory
                }</div>
            </div>
        </a>
    `;

  contentContainer.appendChild(content);
});



// setiap produk in cart(Error){
// // setiap produk in cart
// // cartContent.forEach(function(element){
// //     element.addEventListener("click", function(){
// //         window.location.href = "../HTML/product_detail.html";
// //     });
// // });
// }
