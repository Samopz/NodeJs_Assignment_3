let books = [];

app.get("/books", (req, res) => {
    res.json(books);
});

app.post("/books", (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).send("Book added successfully");
});

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  books = books.filter((book) => book.id !== bookId);
  res.send("Book deleted successfully");
});

app.patch("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const updatedBook = req.body;
  books = books.map((book) => (book.id === bookId ? updatedBook : book));
  res.send("Book updated successfully");
});

module.exports = books;
