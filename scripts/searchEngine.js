window.addEventListener("load", function () {
  const searchBar = document.getElementById("search-form");
  const searchInput = document.getElementById("search-bar-input");

  addEventListener("submit", function (e) {
    e.preventDefault()
    

    const searchProducts = async () => {
      const userSearch = searchInput.value;
      const url = "http://localhost:3000/search";

      try {
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify({
            userSearch,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
          }

        const body = await response.json();
        

        if (response.status === 201) {
            
            const data = body.searchedProducts
            sessionStorage.setItem('searchData', JSON.stringify(data));
            window.location.href = "./searchResults.html";         
        }
      } catch (err) {
        console.log(err);
      }
    };

    searchProducts()
  });
});
