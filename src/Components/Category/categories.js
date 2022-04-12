import React from "react";
import "../../index.css";

const categories = (props) => {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col col-md-4 col-sm-12 m-auto">
          <h1 className="my-3 text-center">Categories</h1>
          <ol className="list-group list-group-numbered">
            {props.categories.map((item) => {
              return (
                <li
                  key={item}
                  className="list-group-item d-flex justify-content-between align-items-start "
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{item}</div>
                  </div>
                  <span className="badge bg-secondary rounded-pill">📗</span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default categories;
