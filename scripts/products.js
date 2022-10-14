window.addEventListener("load", function () {
  const url = "http://localhost:3000/";

  const fetchData = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const body = await response.json();

      let productsContainer = document.getElementById("products-container");

      let spinner = document.createElement("div");
      spinner.style.border = "4px solid #EA5B0C"
      spinner.style.borderLeftColor = "transparent"
      spinner.style.borderRadius = "50%"
      spinner.style.margin = "1rem";
      spinner.style.width = "50px"
      spinner.style.height = "50px"
      spinner.style.animation = "spin 1s linear infinite"
      spinner.style.transform = "rotate(7deg)"
      productsContainer.appendChild(spinner);


      if (response.status === 201) {
        spinner.style.display = "none"
        var data = body.orderedProducts;

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
            productDiscountPrice.innerHTML ="$" + (data[i].price - (data[i].price * (data[i].discount / 100)));
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

      }
    } catch (err) {
      console.log(err);
    }
  };

  fetchData();
});
