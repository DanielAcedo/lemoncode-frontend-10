interface Book {
  title: string;
  isRead: boolean;
}

console.log("--- Read Books ---");
const isBookReadTs = (books: Book[], titleToSearch: string): boolean => {
  const foundBook = books.find((b) => b.title === titleToSearch);
  return foundBook ? foundBook.isRead : false;
};

const booksTs: Book[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación"));
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(isBookRead(books, "Los Pilares de la Tierra"));
