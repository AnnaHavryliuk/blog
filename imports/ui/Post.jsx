import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

// Post component - represents a single post
export default class Post extends Component {
  deletePost() {
    Meteor.call('posts.remove', this.props.post._id);
  }

  addLike(isLike) {
    let likeAmount;
    if (isLike) {
      likeAmount = this.props.post.like + 1;
    } else {
      likeAmount = this.props.post.dislike + 1;
    }

    Meteor.call('posts.manageLikes', this.props.post._id, likeAmount, isLike);
  }

  render() {
    return (
      <article>
        <header>
          <h2>{ this.props.post.title }</h2>
          <span>{this.props.post.createdAt}</span>
          <button onClick={ this.deletePost.bind(this) }>delete</button>
        </header>
        <div>{this.props.post.text}</div>
        <footer>
          <button onClick={ this.addLike.bind(this, true) }>
            likes: { this.props.post.like }
          </button>
          <button onClick={ this.addLike.bind(this, false) }>
            dislikes: { this.props.post.dislike }
          </button>
        </footer>
      </article>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};