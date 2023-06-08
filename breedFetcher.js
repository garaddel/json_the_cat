const request = require('request');

const breedName = process.argv[2];

if (breedName) {
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(apiUrl, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
    } else {
      const data = JSON.parse(body);
      if (data.length > 0) {
        const firstEntry = data[0];
        const description = firstEntry.description;
        console.log(description);
      } else {
        console.log('Breed cannot be found. Please try a valid cat breed.');
      }
    }
  });
} else {
  console.log('Please provide a breed name as a command-line argument.');
}
