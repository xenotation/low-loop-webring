document.addEventListener('DOMContentLoaded', () => {
    const randomLink = document.getElementById('random-link');

    // Function to fetch data from data.json and return a random valid link
    async function getRandomFriendLink() {
        try {
            const response = await fetch('data.json');
            const data = await response.json();

            // Filter the friends array to exclude invalid or empty links
            const validLinks = data.friends.filter(friend => friend.link && friend.link.trim() !== "");

            // If no valid links are available, log a warning and return '#'
            if (validLinks.length === 0) {
                console.warn('No valid links available in the friends list of data.json.');
                return '#';
            }

            // Select a random valid link
            const randomItem = validLinks[Math.floor(Math.random() * validLinks.length)];
            return randomItem.link;
        } catch (error) {
            console.error('Error fetching or processing data.json:', error);
            return '#'; // Fallback in case of error
        }
    }

    // Assign a random link to the "Random Link" on click
    randomLink.addEventListener('click', async (e) => {
        e.preventDefault(); // Prevent default action
        const url = await getRandomFriendLink();
        window.open(url, '_blank'); // Open the link in a new tab
    });
});
