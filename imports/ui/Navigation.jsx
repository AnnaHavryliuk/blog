import React, { Component } from 'react';

// Navigation component - represents the navBar
export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul className="nav-list">
          <li>
            <a href="#">Blog_Name</a>
            <div className="author-box">
              by
              <span ref="authorName">Author</span>
            </div>
          </li>
          <li><a href="#">Add new post</a></li>
        </ul>
      </nav>
    );
  }
}
