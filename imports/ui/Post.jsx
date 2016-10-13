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
      <article className="post">
        <header className="margin-bttm">
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-md-10">
            <h3>{ this.props.post.title }</h3>
            <span>{this.props.post.createdAt}</span>
          </div>

          <div className="col-xs-12 col-sm-2 col-md-2 delete-btn-box">
            <button className="btn btn-danger btn-sm" onClick={ this.deletePost.bind(this) }><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
          </div>
        </div>
        </header>

        <div className="row margin-bttm">
          <div className="col-xs-12 col-sm-12 col-md-12">
            {this.props.post.text}
          </div>
        </div>

        <footer className="margin-bttm">
          <div className="row">
            <div className="col-xs-12">
              <button className="btn btn-sm like-btn button-violet" onClick={ this.addLike.bind(this, true) }>
              <span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span> ({ this.props.post.like })
              </button>
              <button className=" btn like-btn btn-sm button-violet" onClick={ this.addLike.bind(this, false) }>
              <span className="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span> ({ this.props.post.dislike })
              </button>
            </div>
          </div>
        </footer>
      </article>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired
};