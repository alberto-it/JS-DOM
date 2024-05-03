function displayProducts() {
    const productContainer = document.getElementById("products-container"); 
  
    productContainer.innerHTML = "";
  
    for (const product of products) {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item"); 
        
        const productName = document.createElement("h3");
        productName.textContent = product.name;
    
        const productPrice = document.createElement("p");
        productPrice.textContent = `Price: $${product.price}`;
    
        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;
    
        productItem.appendChild(productName);
        productItem.appendChild(productPrice);
        productItem.appendChild(productDescription);
    
        productContainer.appendChild(productItem);
    }
}