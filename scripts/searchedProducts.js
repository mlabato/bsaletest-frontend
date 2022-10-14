window.addEventListener("load", function () {
  const data = JSON.parse(sessionStorage.getItem("searchData"));

  

  if (data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      let productsContainer = document.getElementById("products-container");
      let article = document.createElement("article");
      article.style.backgroundColor = "white";
      article.style.margin = "1rem";
      article.style.borderRadius = "1.5rem";
      article.style.width = "30%";
      article.style.height = "20%";
      article.style.display = "flex";
      article.style.flexDirection = "column";
      article.style.boxShadow = "5px 10px 15px gray";
      productsContainer.appendChild(article);

      let productImage = document.createElement("img");
      productImage.src = data[i].url_image;
      productImage.style.padding = "0.25rem";
      productImage.style.margin = "4rem";
      productImage.style.width = "15rem";
      productImage.style.height = "15rem";
      article.appendChild(productImage);

      let productName = document.createElement("div");
      productName.innerHTML = data[i].name;
      productName.style.padding = "0.5rem";
      productName.style.margin = "0rem 1rem";
      productName.style.borderBottom = "2px solid gray";
      article.appendChild(productName);

      let productPriceContainer = document.createElement("div");
      productPriceContainer.style.margin = "0rem 2rem";
      productPriceContainer.style.padding = "1rem";
      productPriceContainer.style.display = "flex";
      productPriceContainer.style.flexDirection = "row";
      productPriceContainer.style.alignItems = "center";
      productPriceContainer.style.justifyContent = "space-between";
      article.appendChild(productPriceContainer);

      if (data[i].discount > 0.1) {
        let productDiscount = document.createElement("div");
        productDiscount.innerHTML = data[i].discount + "%";
        productDiscount.style.fontWeight = "900";
        productDiscount.style.fontSize = "1rem";
        productDiscount.style.color = "green";
        productPriceContainer.appendChild(productDiscount);

        let productDiscountPrice = document.createElement("div");
        productDiscountPrice.innerHTML =
          "$" + (data[i].price - data[i].price * (data[i].discount / 100));
        productDiscountPrice.style.fontWeight = "900";
        productDiscountPrice.style.fontSize = "1.5rem";
        productPriceContainer.appendChild(productDiscountPrice);

        let productPriceWithoutDiscount = document.createElement("div");
        productPriceWithoutDiscount.innerHTML = "$" + data[i].price;
        productPriceWithoutDiscount.style.fontWeight = "900";
        productPriceWithoutDiscount.style.fontSize = "1rem";
        productPriceWithoutDiscount.style.textDecoration = "line-through";
        productPriceContainer.appendChild(productPriceWithoutDiscount);
      } else {
        let productPrice = document.createElement("div");
        productPrice.innerHTML = "$" + data[i].price;
        productPrice.style.fontWeight = "900";
        productPrice.style.fontSize = "1.5rem";
        productPriceContainer.appendChild(productPrice);
      }

      let cartIcon = document.createElement("div");
      cartIcon.innerHTML = '<i class="fa fa-cart-shopping"></i>';
      cartIcon.style.fontSize = "1.5rem";
      productPriceContainer.appendChild(cartIcon);
    }
  }else{
    let productsContainer = document.getElementById("products-container");
    let article = document.createElement("article");
    article.style.display = "flex"
    article.style.flexDirection = "column"
    article.style.justifyItems ="center"
    article.style.padding = "4rem"
    article.style.margin = "auto"
    productsContainer.appendChild(article);

    let messageBox = document.createElement("div")
    messageBox.innerText = "No existen productos para esa búsqueda"
    messageBox.style.textAlign = "center"
    messageBox.style.margin = "auto"
    messageBox.style.padding= "0.25rem"
    article.appendChild(messageBox)

    let redirectButton = document.createElement("button");
    redirectButton.innerText = "Volver a la home"
    redirectButton.style.backgroundColor = "#EA5B0C"
    redirectButton.style.padding = "1rem"
    redirectButton.style.borderRadius = "1.5rem"
    redirectButton.style.textAlign = "center"
    redirectButton.style.margin = "auto"
    redirectButton.onclick = () =>{ window.location.href = "./index.html"};
    article.appendChild(redirectButton)

    
  }
});
