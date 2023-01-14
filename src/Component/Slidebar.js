import React from "react";
import { Link } from "react-router-dom";

export const Slidebar = () => {
  return (
    <aside>
      <div className="top">
        <img
          src="https://www.shutterstock.com/image-photo/city-skyline-sydney-australia-circular-260nw-1037552143.jpg"
          alt=""
        />
      </div>
      <hr />
      <div className="bottom">
        <ul>
          <p className="tittle">Main</p>
          <Link to="/books" className="link">
            <li>
              <i class="fa-solid fa-book"></i>
              <span>All Book</span>
            </li>
          </Link>
          <Link to="mybooks" className="link">
            <li>
              <i class="fa-solid fa-book-open-reader"></i>
              <span>Mybook </span>
            </li>
          </Link>
          <Link to="/books/add" className="link">
            <li>
              <i class="fa-solid fa-book"></i>
              <span>Add book </span>
            </li>
          </Link>
          <Link to="/transactions" className="link">
            <li>
              <i class="fa-solid fa-book-open-reader"></i>
              {""}
              <span>Transactions </span>
            </li>
          </Link>
          <p className="title">USER</p>
          <Link to="/profile" className="link">
            <li>
              <i class="fa-solid fa-user"></i>
              <span>Profile</span>
            </li>
          </Link>
        </ul>
      </div>
    </aside>
  );
};
