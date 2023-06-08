const { fetchBreedDescription } = require('../breedFetcher.js');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetching details:', error);
  } else {
    console.log(desc);
  }
});
