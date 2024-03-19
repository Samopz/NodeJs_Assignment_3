let authors = [];

app.get("/authors", (req, res) => {
  res.json(authors);
});

app.post("/authors", (req, res) => {
  const newAuthor = req.body;
  authors.push(newAuthor);
  res.status(201).send("Author added successfully");
});

app.put("/authors/:id", (req, res) => {
  const authorId = req.params.id;
  const updatedAuthor = req.body;
  const index = authors.findIndex((author) => author.id === authorId);
  if (index !== -1) {
    authors[index] = updatedAuthor;
    res.send("Author updated successfully");
  } else {
    res.status(404).send("Author not found");
  }
});

app.delete("/authors/:id", (req, res) => {
  const authorId = req.params.id;
  authors = authors.filter((author) => author.id !== authorId);
  res.send("Author deleted successfully");
});

app.patch("/authors/:id", (req, res) => {
  const authorId = req.params.id;
  const updatedAuthor = req.body;
  authors = authors.map((author) =>
    author.id === authorId ? updatedAuthor : author
  );
  res.send("Author updated successfully");
});

module.exports = authors;

