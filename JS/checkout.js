const urlParams = new URLSearchParams(window.location.search);

document.addEventListener("DOMContentLoaded", function() {
    const minusButton = document.querySelector(".minus_button");
    const plusButton = document.querySelector(".plus_button");
    const displayAmount = document.querySelector(".display_amount_button");

    let quantity = parseInt(displayAmount.textContent);

    minusButton.addEventListener("click", function() {
        if (quantity > 1) {
            quantity--;
            displayAmount.textContent = quantity;
        }
    });

    plusButton.addEventListener("click", function() {
        quantity++;
        displayAmount.textContent = quantity;
    });
});


// Untuk Billings

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".form");
    const submitButton = document.querySelector(".payment button[type='submit']");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (validateForm()) {
            alert("Form submitted successfully!");
            // You can proceed with form submission or further processing here
        }
    });

    function validateForm() {
        let isValid = true;
        const inputs = form.querySelectorAll("input[required], textarea[required]");
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add("error");
                input.nextElementSibling.textContent = "This field is required";
            } else {
                input.classList.remove("error");
                input.nextElementSibling.textContent = "";
            }
        });

        const email = form.querySelector("input[type='email']");
        if (email && !validateEmail(email.value.trim())) {
            isValid = false;
            email.classList.add("error");
            email.nextElementSibling.textContent = "Invalid email address";
        }

        return isValid;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
