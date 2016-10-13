import React, { Component } from 'react';

// Navigation component - represents the navBar
export default class Navigation extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-8">
              <a className="blog-name" href="/">
              <h1>Blog_Name</h1>
              </a>
              <h2 className="author-name">
                by
                <span ref="authorName">Author</span>
              </h2>
            </div>
            <div className="col-xs-3 col-sm-4 col-md-4 create-post">
              <a className="btn button-violet btn-lg" href="/new-post">Create new post</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
