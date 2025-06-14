// grabbing/selecting variables that will be used later

const input = document.querySelector('#favchap'); // box where user types chapter
const button = document.querySelector('button'); // "Add Chapter" button
const list = document.querySelector('#list'); // list that will hold chapters

// action when "add scripture" button is clicked

button.addEventListener('click', () => {
    if (input.value.trim() === '') {
        alert('Please enter a chapter name!');
        return;
    }

    const li = document.createElement("li"); // create list
    li.textContent = input.value; // put user's text inside list

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

    li.appendChild(deleteButton);
    list.appendChild(li);

    input.value = '';

    deleteButton.addEventListener('click', () => {
    list.removeChild(li);
    });

});

// when chapter is being deleted 