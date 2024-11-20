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
    
    // Default description text
    const defaultDescription = 
        'This webring is an experiment in bringing together artists, developers and researchers to build their own website and share traffic among each other. The ring welcomes portfolios, blogs and all kinds of weird bizarre and strange webpages with an emphasis on Bulgarian creators. The web ring has a limited size of 94 participants.';

    // Debounced function to update the description
    const updateDescription = debounce((text) => {
        descriptionParagraph.textContent = text;
    }, 100); // Adjust the delay as needed (e.g., 100ms)

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
