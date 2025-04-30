document.addEventListener("DOMContentLoaded", () => {
    // Obtener el botón
    const loadProductsButton = document.querySelector(".btn.btn-primary.my-2");
    
    // Agregar un evento de clic al botón
    loadProductsButton.addEventListener("click", () => {
      // Llamar a la API cuando el botón sea clickeado
    fetch("https://api.escuelajs.co/api/v1/products")
        .then(response => response.json())
        .then(data => {
          // Llenar las 9 cards con los productos
          const products = data.slice(0, 9); // Obtener solo los primeros 9 productos
        const productCards = document.querySelectorAll(".card");
        
          // Recorrer las cards y actualizar los datos con la API
        products.forEach((product, index) => {
            const card = productCards[index];
            const cardImage = card.querySelector(".bd-placeholder-img");
            const cardTitle = card.querySelector(".card-body .card-text");
            const cardDescription = card.querySelector(".card-body p");
            const cardPrice = card.querySelector(".card-body small");
            
            // Asignar los datos del producto
            cardImage.setAttribute("src", product.images[1]);  // Segunda imagen
            cardTitle.textContent = product.title;  // Título
            cardDescription.textContent = product.description;  // Descripción
            cardPrice.textContent = `$${product.price}`;  // Precio
        });
        })
        .catch(error => console.error('Error fetching products:', error));
    });
});