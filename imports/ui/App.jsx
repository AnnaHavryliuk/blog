import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data'

import { Posts } from '../api/posts.js';

import Post from './Post.jsx';

// App component - represents main content
class App extends Component {
  renderPosts() {
    let allPosts = this.props.posts;

    return allPosts.map((post) => (
      <Post key={post._id} post={post} />
    ));
  }

  render() {
    return (
      <section>
        {this.renderPosts()}
      </section>
    );
  }
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default createContainer(() => {
  Meteor.subscribe('posts');

  return {
    posts: Posts.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
}, App);
