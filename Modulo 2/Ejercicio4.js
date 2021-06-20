console.log("--- Read Books ---");
const isBookRead = (books, titleToSearch) => {
  const foundBook = books.find((b) => b.title === titleToSearch);
  return foundBook ? foundBook.isRead : false;
};

const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación"));
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(isBookRead(books, "Los Pilares de la Tierra"));
