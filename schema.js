fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Select the existing JSON-LD schema element for the website
    const jsonLdSchema = document.getElementById('json-ld-schema');

    // Parse and update the main website schema
    const jsonData = JSON.parse(jsonLdSchema.textContent);
    jsonData.creator.name = data.creatorName || "Nikola Stoyanov"; // Fallback to default

    // Update the schema for each artist (friend)
    data.friends.forEach(friend => {
      const artistSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": friend.name,
        "url": friend.link,
        "description": friend.description || "No description available.",
        "sameAs": friend.link
      };

      // Dynamically add the artist schema as an LD+JSON structure inside the page
      const schemaDiv = document.createElement('div');
      schemaDiv.setAttribute('itemscope', '');
      schemaDiv.setAttribute('itemtype', 'https://schema.org/Person');
      schemaDiv.innerHTML = `
        <meta itemprop="name" content="${friend.name}">
        <meta itemprop="url" content="${friend.link}">
        <meta itemprop="description" content="${friend.description || 'No description available.'}">
        <meta itemprop="sameAs" content="${friend.link}">
      `;
      document.body.appendChild(schemaDiv);
    });

    // Update the JSON-LD schema element for the website
    jsonLdSchema.textContent = JSON.stringify(jsonData, null, 2);
  })
  .catch(error => console.error('Error loading the data.json file:', error));
