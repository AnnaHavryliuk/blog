import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import App from '../imports/ui/App.jsx';
import Navigation from '../imports/ui/Navigation.jsx';
 
Meteor.startup(() => {
  render(<Navigation />, document.getElementById('navigation'));
  render(<App />, document.getElementById('posts'));
});
