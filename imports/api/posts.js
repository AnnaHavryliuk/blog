import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Posts = new Mongo.Collection('posts');

if (Meteor.isServer) {
  Posts.insert({
    title: "Title init 1",
    text: "Text init 1",
    createdAt: new Date().toString().substr(0, 31),
    like: 0,
    dislike: 0,
  });

  Meteor.publish('posts', function postsPublication() {
    return Posts.find();
  });
}

Meteor.methods({
  'posts.insert'(title, text) {
    check(title, String);
    check(text, String);

    const date = new Date();

    Posts.insert({
      title,
      text,
      createdAt: date.toString().substr(0, 31),
      like: 0,
      dislike: 0,
    });
  },
  'posts.manageLikes'(postId, likeAmount, isLike) {
    check(isLike, Boolean);

    if (isLike) {
      Posts.update(postId, {$set: {like: likeAmount}});
    } else {
      Posts.update(postId, {$set: {dislike: likeAmount}});
    }
  },
  'posts.remove'(postId) {
    Posts.remove(postId);
  },
});