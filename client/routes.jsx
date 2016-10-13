import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import App from '../imports/ui/App.jsx';
import Blog from '../imports/ui/Blog.jsx';
import NewPost from '../imports/ui/NewPost.jsx';


FlowRouter.route('/', {
  name: 'Blog.show',
  action() {
    mount(App, {
      main: <Blog/>,
    });
  },
});

FlowRouter.route('/new-post', {
  name: 'NewPost.show',
  action() {
    mount(App, {
      main: <NewPost/>,
    });
  },
});