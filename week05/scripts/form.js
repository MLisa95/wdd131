const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const productSelect = document.getElementById("product");

products.forEach(product => {
    const option = document.createElement("option");
    option.vvalue = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

document.querySelector(".review-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // collecting data
    const product = document.getElementById("product").value;
    const rating = document.querySelector("input[name='rating']:checked").value;
    const dateInstalled = document.getElementById("dateInstalled").value;
    const review = document.getElementById("review").value;
    const username = document.getElementById("username").value;

    const features = Array.from(document.querySelectorAll("input[name='features']:checked"))
        .map(feature => feature.value);

    const reviewData = {
        product,
        rating,
        dateInstalled,
        features,
        review,
        username
    };

    localStorage.setItem("productReview", JSON.stringify(reviewData));

    window.location.href = "review.html";
});