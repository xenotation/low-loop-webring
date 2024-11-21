// Debounce function to control rapid hover events
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// Function to populate the lists
function populateList(listClass, dataArray) {
    const list = document.querySelector(listClass);
    const descriptionParagraph = document.querySelector('.description p');

    // Extract the default description from the .description element
    const defaultDescription = document.querySelector('.description').innerHTML.trim(); // Use innerHTML to keep inline HTML

    // Debounced function to update the description
    const updateDescription = debounce((text) => {
        descriptionParagraph.innerHTML = text || defaultDescription; // Use innerHTML to insert HTML content
    }, 123); // Adjust the delay as needed (e.g., 100ms)

    dataArray.forEach(item => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = item.link;
        link.textContent = item.name;

        // Add event listeners for hover
        link.addEventListener('mouseenter', () => {
            updateDescription(item.description);
        });
        link.addEventListener('mouseleave', () => {
            updateDescription(defaultDescription);
        });

        listItem.appendChild(link);
        list.appendChild(listItem);
    });
}

// Fetch the data from the JSON file
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Populate the lists with the data from the JSON
        populateList('.me-list', data.me);
        populateList('.friend-list', data.friends);
    })
    .catch(error => {
        console.error('Error loading the data:', error);
    });
