// Function to populate the lists
function populateList(listClass, dataArray) {
    const list = document.querySelector(listClass);
    dataArray.forEach(item => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = item.link;
        link.textContent = item.name;

        // Add event listeners for hover
        link.addEventListener('mouseenter', () => {
            document.querySelector('.description p').textContent = item.description;
        });
        link.addEventListener('mouseleave', () => {
            document.querySelector('.description p').textContent = 'Hover over a link to see its description.';
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
