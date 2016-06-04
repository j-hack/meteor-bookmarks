import { Template } from 'meteor/templating';
import './AppContainer.html';

const bookmarks = [
  {_id: 1, title: 'bookmark 1'},
  {_id: 2, title: 'bookmark 2'},
  {_id: 3, title: 'bookmark 3'},
  {_id: 4, title: 'bookmark 5'},
  {_id: 5, title: 'bookmark 6'},
];

Template.AppContainer.onCreated(function() {
});

Template.AppContainer.onRendered(function() {
});

Template.AppContainer.onDestroyed(function() {
});

Template.AppContainer.events({
});

Template.AppContainer.helpers({
  bookmarks,
});