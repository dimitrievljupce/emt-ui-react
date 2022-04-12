import axios from "../custom-axios/axios";

const BookService = {
  fetchBooks: () => {
    return axios.get("/books");
  },
  fetchCategories: () => {
    return axios.get("/books/categories");
  },
  fetchAuthors: () => {
    return axios.get("/authors");
  },
  getCurrentBook: (id) => {
    return axios.get(`/books/${id}`);
  },
  editCurrentBook: (id, name, category, author, availableCopies) => {
    return axios.put(`/books/editBook/${id}`, {
      name: name,
      category: category,
      author: author,
      availableCopies: availableCopies,
    });
  },
  deleteCurrentBook: (id) => {
    return axios.delete(`/books/deleteBook/${id}`);
  },
  setAvailableCopies: (id) => {
    return axios.get(`/books/setAvailableCopies/${id}`);
  },
  addBook: (name, category, author, availableCopies) => {
    return axios.post("/books/addBook", {
      name: name,
      category: category,
      author: author,
      availableCopies: availableCopies,
    });
  },
};

export default BookService;
