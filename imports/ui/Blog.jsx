import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Posts } from '../api/posts.js';

import Post from './Post.jsx';

// Blog component - represents main content
class Blog extends Component {
  renderPosts() {
    let allPosts = this.props.posts;

    return allPosts.map((post) => (
      <Post key={post._id} post={post} />
    ));
  }

  render() {
    return (
    <div className="container">
      {this.renderPosts()}
    </div>
    );
  }
}

Blog.propTypes = {
  posts: PropTypes.array.isRequired
};

export default createContainer(() => {
  Meteor.subscribe('posts');

  return {
    posts: Posts.find({}, { sort: { createdAt: -1 } }).fetch()
  };
}, Blog);