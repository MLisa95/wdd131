// grabbing/selecting variables that will be used later

const input = document.querySelector('#favchap'); // box where user types chapter
const button = document.querySelector('button'); // "Add Chapter" button
const list = document.querySelector('#list'); // list that will hold chapters

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter => {
    displayList(chapter);
}));

// action when "add scripture" button is clicked

button.addEventListener('click', () => {
    if (input.value !== "") {
    displayList(input.value);                
    chaptersArray.push(input.value);         
    setChapterList();                        
    input.value = "";                        
    input.focus();                           
  }
});

function displayList(item) {
    // Find the UL element where chapters are displayed
    const list = document.getElementById("list");

    // Create a new list item
    const li = document.createElement("li");
    li.textContent = item;

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.setAttribute("aria-label", `Delete ${item}`);

    // Add click event to delete the chapter
    deleteButton.addEventListener("click", () => {
        deleteChapter(item);
        list.removeChild(li);  // Remove from the displayed list
    });

    // Append delete button to list item
    li.appendChild(deleteButton);

    // Append the list item to the UL
    list.appendChild(li);
}

function setChapterList() {
    localStorage.setItem("chapters", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("chapters"));
}

function deleteChapter(chapter) {

    // Filter out the chapter to delete from chaptersArray
    chaptersArray = chaptersArray.filter((item) => item !== chapter);

    // Update localStorage with the new array
    setChapterList();
}