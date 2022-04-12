import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const BookAdd = (props) => {
  let navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    name: "",
    category: "NOVEL",
    author: 1,
    availableCopies: 1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = formData.name;
    const category = formData.category;
    const author = formData.author;
    const availableCopies = formData.availableCopies;

    props.onAddBook(name, category, author, availableCopies);
    navigate("/books");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col col-md-8 col-sm-12 m-auto">
          <h4 className="display-5 text-center my-3">
            Add new book to library
          </h4>
          <form onSubmit={handleSubmit}>
            <div className="input-group my-3">
              <span className="input-group-text" id="basic-addon1">
                Book title
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className="input-group my-3">
              <span className="input-group-text" id="basic-addon1">
                Category
              </span>
              <select
                className="form-control"
                name="category"
                onChange={handleChange}
              >
                {props.categories.map((item, key) => {
                  return (
                    <option value={item} key={key}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="input-group my-3">
              <span className="input-group-text" id="basic-addon1">
                Author
              </span>
              <select
                className="form-control"
                name="author"
                onChange={handleChange}
              >
                {props.authors.map((item, key) => {
                  return (
                    <option value={item.id} key={key}>
                      {item.name + " " + item.surname}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="input-group my-3">
              <span className="input-group-text" id="basic-addon1">
                Available copies
              </span>
              <input
                type="number"
                className="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
                name="availableCopies"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-sm btn-success">
              Add this book
            </button>
            <Link className="btn btn-sm btn-secondary ms-2" to="/books">
              Back
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookAdd;
