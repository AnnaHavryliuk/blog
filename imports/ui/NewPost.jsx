import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';

// NewPost component - represents a new post
export default class NewPost extends Component {
  addNewPostToDB(event) {
    // Find the title and text fields via the React ref
    const title = ReactDOM.findDOMNode(this.refs.titleInput).value.trim();
    const text = ReactDOM.findDOMNode(this.refs.text).value.trim();

    Meteor.call('posts.insert', title, text);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title" ref="titleInput" />
              </div>
              <div className="form-group">
                <label htmlFor="text">Post</label>
                <textarea className="form-control not-resizable" id="text" rows="20" ref="text"></textarea>
              </div>
              <button className="btn button-violet" onClick={ this.addNewPostToDB.bind(this) }>
                add post
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
