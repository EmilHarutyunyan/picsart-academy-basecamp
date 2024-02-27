const products = [
  {
    id: 1,
    name: "Eco-friendly Water Bottle",
    category: "Home",
    price: 15,
    tags: ["eco-friendly", "new"],
  },
  {
    id: 2,
    name: "Organic Cotton T-shirt",
    category: "Apparel",
    price: 25,
    tags: ["eco-friendly"],
  },
  {
    id: 3,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 200,
    tags: ["new", "sale"],
  },
];

const sortPriceMinMax = (data, type) => {
  const sortPrice = data.sort((a, b) => b[type] - a[type]);
  return { max: sortPrice[0].price, min: sortPrice.at(-1).price };
};
const getUniqueValues = (data, type, all = false) => {
  let unique = data.map((item) => item[type]);
  if (type === "tags") {
    unique = unique.flat();
  }
  if (all) {
    return ["All", ...new Set(unique)];
  }
  return [...new Set(unique)];
};

const updatePrice = () => {
  const labelElement = document.getElementById("priceValue");
  labelElement.textContent = formatPrice(priceValue.value);
  updateFilter();
};

const updateFilter = () => {
  const selectedCategory = categorySelect.value;
  const selectedTags = Array.from(tagCheckboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);
  const selectedPrice = +priceValue.value;

  let filteredProducts = products;
  if (selectedCategory !== "") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === selectedCategory
    );
  }
  if (selectedTags.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedTags.every((tag) => product.tags.includes(tag))
    );
  }
  if (selectedPrice) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price <= selectedPrice
    );
  }

  if (filteredProducts.length === 0) {
    productList.innerHTML = "<div>No products found.</div>";
  } else {
    renderProducts(filteredProducts);
  }
};

const formatPrice = (number) => {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
};

const renderFilters = () => {
  const categoryUnique = getUniqueValues(products, "category", true);
  const tagsUnique = getUniqueValues(products, "tags");
  const filterBar = document.querySelector(".filter-bar");
  const categoryFilters = document.createElement("div");
  const tagFilters = document.createElement("div");
  const priceFilter = document.createElement("div");
  const prices = sortPriceMinMax(products, "price");
  // Category Select
  const selectElement = `
      <label for="category">Category:</label>
      <select id='category' onchange="updateFilter()">${categoryUnique
        .map((category) => {
          let value = category === "All" ? "" : category;
          return `<option value= ${value} > ${category}</option>`;
        })
        .join("")}
       </select`;
  categoryFilters.innerHTML = selectElement;

  filterBar.appendChild(categoryFilters);

  // Tags Checkbox
  const tagElement = `
        <label for="tags">Tags:</label>
          <div class="tags">
          ${tagsUnique
            .map((tag) => {
              return `
                <div class="tag-wrap">
                  <input type="checkbox" id="tag-${tag}" value="${tag}">
                  <label for="tag-${tag}">${tag}</label>
                </div>`;
            })
            .join("")}
        </div`;
  tagFilters.innerHTML = tagElement;

  filterBar.appendChild(tagFilters);

  // Price

  const priceElement = `
      <div class="prices">
        <input type="range" id="price" name="price" min="${prices.min}" max="${
    prices.max
  }" value="${prices.max}" step="1" onchange="updatePrice()"/>
        <label for="volume">Price: <span id="priceValue">${formatPrice(
          prices.max
        )}</span></label>
      </div>
      `;
  priceFilter.innerHTML = priceElement;
  filterBar.appendChild(priceFilter);
};
const productList = document.getElementById("product-list");

function renderProducts(products) {
  productList.innerHTML = "";
  const productItems = products.map((product) => {
    return `
        <div>
          <div className="container">
            <img src="http://via.placeholder.com/290x150?text=FlexCards" alt="${
              product.name
            }">
          </div>
          <div class="product-info">
            <h5>${product.name}</h5>
            <p>${formatPrice(product.price)}</p>
          </div>
        </div>
        `;
  });
  productList.innerHTML = productItems.join("");
}

renderProducts(products);
renderFilters();
const categorySelect = document.querySelector("#category");
const tagCheckboxes = document.querySelectorAll(".tags input[type='checkbox']");
const priceValue = document.querySelector("#price");

categorySelect.addEventListener("change", updateFilter);
tagCheckboxes.forEach((checkbox) =>
  checkbox.addEventListener("change", updateFilter)
);

updateFilter();
