// Sample data from the API
const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction",
    rating: 4.3,
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Dystopian",
    rating: 4.5,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Romance",
    rating: 4.2,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Fiction",
    rating: 4.1,
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    year: 1932,
    genre: "Dystopian",
    rating: 4.4,
  },
  // ... more books
];

// Filtering criteria
const minYear = 1900;
const minRating = 4.3;

// Filtering books published after minYear and with a rating above minRating
const filteredBooks = books.filter(
  (book) => book.year > minYear && book.rating > minRating
);

// Sorting the filtered books by rating in descending order
const sortedBooks = filteredBooks.sort((a, b) => b.rating - a.rating);

// Mapping the sorted books to a simpler format for display
const displayBooks = sortedBooks.map((book) => ({
  title: book.title,
  author: book.author,
  rating: book.rating,
}));

console.log(displayBooks);

const bookList = document.createElement("ol");
displayBooks.forEach((book) => {
  const listItem = document.createElement("li");
  listItem.textContent = `Title: ${book.title}, Author: ${book.author}, Rating: ${book.rating}`;

  bookList.appendChild(listItem);
});
const filterEl = document.querySelector(".filter");
filterEl.appendChild(bookList);
//document.body.appendChild(bookList);

//reduce
array.reduce((accumulator, currentValue, currentIndex, array) =>{

}, initalValue);