// product category:
// Food and Beverages
// Electronics
// Clothing and Accessories
// Home and Furniture

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

const products = [
    {
        productName: "PC Case",
        donatorLocation: "Jakarta",
        donatorAddress: "Jl. Duren Sawit No. 123, Jakarta",
        productCategory: "Electronics",
        conditionStar: 3,
        productDescription: "Used PC case with some scratches & signs of wear, but still fully functional. Suitable for building a budget PC or as a replacement case.",
        productAmount: 1,
        productImage: "../ASSET/product-image/product-1.jpg"
    },
    {
        productName: "Jeans",
        donatorLocation: "Bandung",
        donatorAddress: "Jl. Cihampelas No. 456, Bandung",
        productCategory:  "Clothing & Accessories",
        conditionStar: 4,
        productDescription: "Used jeans in good condition, no tears or major defects. Perfect for casual wear & comfortable for daily use. Fits well & is very stylish.",
        productAmount: 3,
        productImage: "../ASSET/product-image/product-2.jpg"
    },
    {
        productName: "Shorts",
        donatorLocation: "Surabaya",
        donatorAddress: "Jl. Raya Surabaya Barat No. 789, Surabaya",
        productCategory:  "Clothing & Accessories",
        conditionStar: 4,
        productDescription: "Used shorts in very good condition, stylish & comfortable for casual outings or lounging at home. Durable fabric with no visible stains or damage.",
        productAmount: 1,
        productImage: "../ASSET/product-image/product-3.jpg"
    },
    {
        productName: "Phone",
        donatorLocation: "Yogyakarta",
        donatorAddress: "Jl. Malioboro No. 101, Yogyakarta",
        productCategory: "Electronics",
        conditionStar: 5,
        productDescription: "Used phone in excellent condition, all functions work perfectly. Great for a secondary device or as a budget-friendly option. Comes with charger & box.",
        productAmount: 1,
        productImage: "../ASSET/product-image/product-4.jpg"
    },
    {
        productName: "Wall Clock",
        donatorLocation: "Semarang",
        donatorAddress: "Jl. Pahlawan No. 11, Semarang",
        productCategory: "Home & Furniture",
        conditionStar: 4,
        productDescription: "Used wall clock, still functioning well with a classic design. Adds a touch of vintage charm to any room. Battery-operated & easy to install.",
        productAmount: 1,
        productImage: "../ASSET/product-image/product-5.jpg"
    },
    {
        productName: "Mattress",
        donatorLocation: "Bali",
        donatorAddress: "Jl. Sunset Road No. 789, Bali",
        productCategory: "Home & Furniture",
        conditionStar: 3,
        productDescription: "Used mattress with some stains, but still very comfortable & supportive. Ideal for a guest room or temporary use. Standard queen size.",
        productAmount: 1,
        productImage: "../ASSET/product-image/product-6.jpg"
    },
    {
        productName: "Shirt",
        donatorLocation: "Jakarta",
        donatorAddress: "Jl. Sudirman No. 456, Jakarta",
        productCategory:  "Clothing & Accessories",
        conditionStar: 4,
        productDescription: "Used shirt in good condition, suitable for both formal & casual events. Comfortable fabric, well-fitting, & easy to match with different outfits.",
        productAmount: 2,
        productImage: "../ASSET/product-image/product-7.jpg"
    },
    {
        productName: "Suitcase",
        donatorLocation: "Bandung",
        donatorAddress: "Jl. Merdeka No. 101, Bandung",
        productCategory:  "Clothing & Accessories",
        conditionStar: 5,
        productDescription: "Used suitcase in excellent condition, spacious & durable. Perfect for long trips & frequent travelers. Smooth wheels & secure locks.",
        productAmount: 1,
        productImage: "../ASSET/product-image/product-8.jpg"
    },
    {
        productName: "Refrigerator",
        donatorLocation: "Surabaya",
        donatorAddress: "Jl. Pahlawan Timur No. 21, Surabaya",
        productCategory: "Home & Furniture",
        conditionStar: 3,
        productDescription: "Used refrigerator, medium size, still functioning well. Perfect for small apartments or as an extra fridge. Energy-efficient with adjustable shelves.",
        productAmount: 1,
        productImage: "../ASSET/product-image/product-9.jpg"
    },
    {
        productName: "Laptop",
        donatorLocation: "Yogyakarta",
        donatorAddress: "Jl. Magelang No. 789, Yogyakarta",
        productCategory: "Electronics",
        conditionStar: 4,
        productDescription: "Used laptop with good specifications, ideal for everyday tasks like browsing, writing, & watching videos. Battery life is decent & includes a charger.",
        productAmount: 1,
        productImage: "../ASSET/product-image/product-10.jpg"
    },
    {
        productName: "Wardrobe",
        donatorLocation: "Semarang",
        donatorAddress: "Jl. Ahmad Yani No. 11, Semarang",
        productCategory: "Home & Furniture",
        conditionStar: 5,
        productDescription: "Used wardrobe in very good condition, spacious & sturdy. Great for storing clothes & other items. Modern design that fits various decor styles.",
        productAmount: 1,
        productImage: "../ASSET/product-image/product-11.jpg"
    },
    {
        productName: "Jacket",
        donatorLocation: "Bali",
        donatorAddress: "Jl. Pantai Kuta No. 21, Bali",
        productCategory:  "Clothing & Accessories",
        conditionStar: 3,
        productDescription: "Used jacket with some signs of wear, but still comfortable & stylish. Perfect for cool weather, with a cozy interior & durable exterior.",
        productAmount: 1,
        productImage: "../ASSET/product-image/product-12.jpg"
    },
    {
        productName: "Speaker",
        donatorLocation: "Jakarta",
        donatorAddress: "Jl. Thamrin No. 101, Jakarta",
        productCategory: "Electronics",
        conditionStar: 3,
        productDescription: "Used speaker with good sound quality, some surface scratches. Ideal for casual listening at home or in small gatherings. Compact & portable design.",
        productAmount: 1,
        productImage: "../ASSET/product-image/product-13.jpg"
    },
    {
        productName: "TV",
        donatorLocation: "Bandung",
        donatorAddress: "Jl. Asia Afrika No. 456, Bandung",
        productCategory: "Electronics",
        conditionStar: 4,
        productDescription: "Used TV with good picture quality, suitable for a family room or bedroom. Reliable & functional, with multiple input options for various devices.",
        productAmount: 1,
        productImage: "../ASSET/product-image/product-14.jpg"
    },
    {
        productName: "Lunch Box",
        donatorLocation: "Bekasi",
        donatorAddress: "Jl. Bugis No. 6, Bekasi",
        productCategory: "Food & Beverages",
        conditionStar: 5,
        productDescription: "Used lunch box in excellent condition, perfect for carrying meals. Compact, easy to clean, and durable. Great for school or office use.",
        productAmount: 30,
        productImage: "../ASSET/product-image/product-15.jpg"
    },
    {
        productName: "Rice",
        donatorLocation: "Surabaya",
        donatorAddress: "Jl. Bukit Pemuda No. 1945, Surabaya",
        productCategory: "Food & Beverages",
        conditionStar: 5,
        productDescription: "Unopened pack of rice, high quality and fresh. Ideal for daily cooking and meal preparation. Provides a nutritious base for a variety of dishes.",
        productAmount: 5,
        productImage: "../ASSET/product-image/product-16.jpg"
    }
];

// display content
const contentContainer = document.querySelector(".content_container");  
products.forEach(product => {
    const content = document.createElement("div");
    content.classList.add("content");

    // Generate star icons HTML
    let starIconsHTML = '';
    for (let i = 0; i < product.conditionStar; i++) {
        starIconsHTML += '<div class="star_logo"></div>';
    }

    // Create link to detail page with product data
    content.innerHTML = `
        <a href="../HTML/product_detail.html?productName=${encodeURIComponent(product.productName)}&donatorLocation=${encodeURIComponent(product.donatorLocation)}&donatorAddress=${encodeURIComponent(product.donatorAddress)}&productCategory=${encodeURIComponent(product.productCategory)}&conditionStar=${product.conditionStar}&productDescription=${encodeURIComponent(product.productDescription)}&productAmount=${product.productAmount}&productImage=${encodeURIComponent(product.productImage)}">
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
                <div class="product_locaton_button">${product.donatorLocation}</div>
                <div class="product_category_button">${product.productCategory}</div>
            </div>
        </a>
    `;
    
    contentContainer.appendChild(content);
});



// filter
const filterButton = document.querySelector(".product_filter_button");
const filterContainer = document.querySelector(".product_filter_container");
filterButton.addEventListener("click", function(){
    filterContainer.style.display = "flex";
});
// close button
const filterCloseButton = document.querySelector(".close_icon_filter");
filterCloseButton.addEventListener("click", function(){
    filterContainer.style.display = "none";
});
// filter per a
const filterOption = document.querySelectorAll(".filter");
filterOption.forEach(function(element){
    element.addEventListener("click", function(){
        filterContainer.style.display = "none";
    })
});
// click diluar filter
filterContainer.addEventListener("click", (e) => {
    if (e.target === filterContainer) {
        filterContainer.style.display = "none";
    }
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
const checkOutButton = document.querySelector(".check_out_buton");
checkOutButton.addEventListener("click", function(){
    window.location.href = "../HTML/checkout.html"
});
// ========================================================================================================================================

// setiap produk in cart(Error){
// // setiap produk in cart
// // cartContent.forEach(function(element){
// //     element.addEventListener("click", function(){
// //         window.location.href = "../HTML/product_detail.html";
// //     });
// // });
// }


// Filter(ERROR){
//     const choosedFilter = null;
//     const foodBeverageFilter = document.querySelector(".food_beverage_filter");
//     const electronicsFilter = document.querySelector(".electronics_filter");
//     const clothingAccessoriesFilter= document.querySelector(".clothing_accessories_filter");
//     const homeFurnitureFilter = document.querySelector(".home_furniture_filter");
//     const starFilter5 = document.querySelector(".star_5_filter");
//     const starFilter4 = document.querySelector(".star_4_filter");
//     const starFilter3 = document.querySelector(".star_3_filter");
//     const starFilter2 = document.querySelector(".star_2_filter");
//     const starFilter1 = document.querySelector(".star_1_filter");
//     const nearbyFilter = document.querySelector(".nearby_filter");
    
//     foodBeverageFilter.addEventListener("click", function(){
//         // choosedFilter = "FoodBeverage";
//         choosedFilter = 1;
//     })
//     electronicsFilter.addEventListener("click", function(){
//         // choosedFilter = "Electronic"
//         choosedFilter = 2;
//     })
//     clothingAccessoriesFilter.addEventListener("click", function(){
//         // choosedFilter = "ClothingAccessories"
//         choosedFilter = 1;
//     })
//     homeFurnitureFilter.addEventListener("click", function(){
//         // choosedFilter = "HomeFurniture"
//         choosedFilter = 1;
//     })
// }


