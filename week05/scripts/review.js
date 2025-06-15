// Get the saved review from localStorage
const review = JSON.parse(localStorage.getItem("productReview"));

if (review) {
    const summaryDiv = document.getElementById("review-summary");

    summaryDiv.innerHTML = `
        <p><strong>Product:</strong> ${review.product}</p>
        <p><strong>Rating:</strong> ${review.rating} stars</p>
        <p><strong>Date Installed:</strong> ${review.dateInstalled}</p>
        <p><strong>Features:</strong> ${review.features.join(", ")}</p>
        <p><strong>Review:</strong> ${review.review || "No written review provided."}</p>
        <p><strong>Username:</strong> ${review.username || "Anonymous"}</p>
    `;
} else {
    document.getElementById("review-summary").textContent = "No review data found.";
}
