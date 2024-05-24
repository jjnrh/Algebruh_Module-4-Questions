const choicesContainer = document.getElementById('choices');

const choices = ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4'];

choices.forEach(choice => {
    const button = document.createElement('button');
    button.innerText = choice;
    button.classList.add('button');
    button.addEventListener('click', () => {
        // You can add logic here to handle the selected choice
        console.log('Selected choice:', choice);
    });
    choicesContainer.appendChild(button);
});
