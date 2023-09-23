const movies = [
    { title: "3 Idiots", genre: "Comedy", year: 2009, rating: 8.4 },
    { title: "Lagaan: Once Upon a Time in India", genre: "Drama", year: 2001, rating: 8.1 },
    { title: "Dilwale Dulhania Le Jayenge", genre: "Romance", year: 1995, rating: 8.1 },
    { title: "PK", genre: "Comedy", year: 2014, rating: 8.1 },
    { title: "Sholay", genre: "Action", year: 1975, rating: 8.2 },
    { title: "Kabhi Khushi Kabhie Gham...", genre: "Drama", year: 2001, rating: 7.4 },
    { title: "Mughal-E-Azam", genre: "Drama", year: 1960, rating: 8.2 },
    { title: "Bahubali: The Beginning", genre: "Action", year: 2015, rating: 8.1 },
    { title: "Queen", genre: "Comedy", year: 2013, rating: 8.2 },
    { title: "Bajrangi Bhaijaan", genre: "Drama", year: 2015, rating: 8.0 }
  ];
  

  
// Function to filter movies by genre
const filterByGenre = (movie, genre) => movie.genre.toLowerCase().includes(genre.toLowerCase());

// Chaining to manipulate the movies array
const actionMovies = movies
  .filter((movie) => filterByGenre(movie, "action")) // Filter action genre movies
  .map((movie) => movie.title); // Extract movie titles

console.log(actionMovies);