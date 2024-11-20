fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Inject main website schema
    const jsonLdSchema = document.getElementById('json-ld-schema');
    const jsonData = JSON.parse(jsonLdSchema.textContent);

    // Set the creator name dynamically
    jsonData.creator.name = data.creatorName || "Nikola Stoyanov"; // Fallback to default if not provided

    // Inject schema for each friend (artist)
    data.friends.forEach(friend => {
      const artistSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": friend.name,
        "url": friend.link,
        "description": friend.description || "No description available.",
        "sameAs": friend.link
      };

      // Create a new script tag for each artist and inject it
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(artistSchema, null, 2);
      document.head.appendChild(script); // Append to the <head> section
    });

    // Update the main schema in the document
    jsonLdSchema.textContent = JSON.stringify(jsonData, null, 2);
  })
  .catch(error => console.error('Error loading the data.json file:', error));
