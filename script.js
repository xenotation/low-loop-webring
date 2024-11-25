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
    const firstParagraph = document.querySelector('.description p'); // Target the first <p> element

    // Extract the default description from the first <p> tag in the .description element
    const defaultDescription = firstParagraph.innerHTML.trim(); // Get the innerHTML of the first <p>

    // Debounced function to update the description
    const updateDescription = debounce((html) => {
        if (!html) {
            firstParagraph.innerHTML = defaultDescription; // Reset to default if no content
            return;
        }

        // Use DOM parsing for safer insertion of links and styles
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = html;

        // Replace the content of the first <p> tag with the new HTML
        firstParagraph.innerHTML = tempContainer.innerHTML;
    }, 123); // Adjust the delay as needed

    // Create list items and add event listeners
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
