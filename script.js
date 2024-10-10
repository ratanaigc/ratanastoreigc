const menuproducts = [
    { category: "mac", title: "iMac 2017", price: "1300$", imgSrc: "./Img/imac.webp" },
    { category: "iphone", title: "iPhone 4S", price: "50$", imgSrc: "./Img/iphone-4.webp" },
    { category: "ipad", title: "iPad Air", price: "700$", imgSrc: "./Img/ipad-air.webp" },
    { category: "ipad", title: "iPad Mini", price: "600$", imgSrc: "./Img/ipad-mini.webp" },
    { category: "ipad", title: "iPad Pro", price: "800$", imgSrc: "./Img/ipad-pro.webp" },
    { category: "iphone", title: "iPhone 3G", price: "40$", imgSrc: "./Img/iphone-3.webp" },
    { category: "iphone", title: "iPhone 5S", price: "65$", imgSrc: "./Img/iphone-5s.webp" },
    { category: "mac", title: "macBook Pro", price: "1399$", imgSrc: "./Img/macbook-pro.webp" },
    { category: "iwatch", title: "iWatch 6 Series", price: "400$", imgSrc: "./Img/iwatch-6.webp" },
    { category: "mac", title: "macBook Air", price: "800$", imgSrc: "./Img/macbook-air.webp" },
    { category: "mac", title: "macBook 2015", price: "700$", imgSrc: "./Img/macbook-pro-2015.webp" },
    { category: "iwatch", title: "iWatch 8 Series", price: "600$", imgSrc: "./Img/iwatch-8.webp" },
    { category: "iphone", title: "iPhone 14 Pro Max", price: "1200$", imgSrc: "./Img/iphone-14.webp" },
];

// Function to search items
function searchItem() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const resultContainer = document.getElementById('searchResults');

    // Clear previous results
    resultContainer.innerHTML = '';

    // If query is empty, return early to not display any results
    if (query.trim() === '') {
        return; // Exit the function if the search input is empty
    }

    const results = menuproducts.filter(product => product.title.toLowerCase().includes(query));

    if (results.length > 0) {
        results.forEach(item => {
            const div = document.createElement('div');
            div.textContent = `${item.title} - ${item.price}`; // Display title and price of the product
            div.classList.add('result-item');
            resultContainer.appendChild(div);

            // Add click event to scroll to the product
            div.addEventListener('click', () => {
                const productElement = document.getElementById(item.title.replace(/\s+/g, '-')); // Replace spaces with dashes for the ID
                if (productElement) {
                    productElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    } else {
        resultContainer.textContent = 'No products found';
    }
}

// Event listener for live search
document.getElementById('searchInput').addEventListener('input', () => {
    searchItem();
});

const menuwrapper = document.querySelector(".menu-wrapper");
const allbtn = document.querySelectorAll(".btn");
const btncontainer = document.querySelector(".btn-container");

// Button click event to filter products
btncontainer.addEventListener("click", (e) => {
    const btnid = e.target.dataset.id;

    allbtn.forEach((btn) => {
        btn.classList.remove("active");
    });
    e.target.classList.add("active");
});

// Filter products by category
allbtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const id = e.currentTarget.dataset.id;
        const filtermenu = menuproducts.filter((item) => {
            return item.category === id;
        });
        if (id === "all") {
            showingproduct(menuproducts);
        } else {
            showingproduct(filtermenu);
        }
    });
});

// Show products on initial load
window.addEventListener("DOMContentLoaded", () => {
    showingproduct(menuproducts);
});

// Function to display products
const showingproduct = (arrayproducts) => {
    const displayproduct = arrayproducts
        .map((p) => {
            return `<article id="${p.title.replace(/\s+/g, '-')}" class="card">  <!-- Replace spaces with dashes -->
                <img src="${p.imgSrc}" alt="${p.title}" class="img" />
                <h3 class="card-heading">${p.title}</h3>
                <span class="price">${p.price}</span>
              </article>`;
        }).join("");

    menuwrapper.innerHTML = displayproduct;
};
