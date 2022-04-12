import "./App.css";
import React from "react";
import BookService from "../../repository/repository";
import Book from "../Book/books";
import BookEdit from "../Book/BookEdit/bookEdit";
import BookAdd from "../Book/BookAdd/bookAdd";
import Category from "../Category/categories";
import Header from "../Header/header";

import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      categories: [],
      authors: [],
      currentBook: {},
    };
  }

  render() {
    return (
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/books/edit/:id"
              element={
                <BookEdit
                  authors={this.state.authors}
                  categories={this.state.categories}
                  currentBook={this.state.currentBook}
                  editCurrentBook={this.editCurrentBook}
                />
              }
            />
            <Route
              path="/books/add"
              element={
                <BookAdd
                  categories={this.state.categories}
                  authors={this.state.authors}
                  onAddBook={this.addBook}
                />
              }
            />
            <Route
              path="/books"
              element={
                <Book
                  books={this.state.books}
                  getCurrentBook={this.loadCurrentBook}
                  onDeleteCurrentBook={this.deleteBook}
                  currentBook={this.state.currentBook}
                  changeCopiesValue={this.setAvailableCopies}
                />
              }
            />
            <Route
              path="/categories"
              element={<Category categories={this.state.categories} />}
            />
            <Route
              path="/"
              element={
                <Book
                  books={this.state.books}
                  getCurrentBook={this.loadCurrentBook}
                  onDeleteCurrentBook={this.deleteBook}
                  currentBook={this.state.currentBook}
                  changeCopiesValue={this.setAvailableCopies}
                />
              }
            />
          </Routes>
        </Suspense>
      </Router>
    );
  }

  loadBooks = () => {
    BookService.fetchBooks().then((resp) => {
      const bookData = resp.data;
      this.setState({
        books: bookData,
      });
    });
  };

  loadCategories = () => {
    BookService.fetchCategories().then((resp) => {
      this.setState({
        categories: resp.data,
      });
    });
  };

  loadAuthors = () => {
    BookService.fetchAuthors().then((resp) => {
      const respData = resp.data;
      this.setState({
        authors: respData,
      });
    });
  };

  loadCurrentBook = (id) => {
    BookService.getCurrentBook(id).then((resp) => {
      this.setState({
        currentBook: resp.data,
      });
    });
  };

  editCurrentBook = (id, name, category, author, availableCopies) => {
    BookService.editCurrentBook(
      id,
      name,
      category,
      author,
      availableCopies
    ).then((resp) => {
      this.loadBooks();
    });
  };

  deleteBook = (id) => {
    BookService.deleteCurrentBook(id).then(() => {
      this.loadBooks();
    });
  };

  setAvailableCopies = (id) => {
    BookService.setAvailableCopies(id).then(() => {
      this.loadBooks();
    });
  };

  addBook = (name, category, author, availableCopies) => {
    BookService.addBook(name, category, author, availableCopies).then(() => {
      this.loadBooks();
    });
  };

  componentDidMount() {
    this.loadBooks();
    this.loadCategories();
    this.loadAuthors();
  }
}

export default App;
