import { Template } from 'meteor/templating';
import './Bookmark.html';

Template.Bookmark.onCreated(function() {
});

Template.Bookmark.onRendered(function() {
});

Template.Bookmark.onDestroyed(function() {
});

Template.Bookmark.events({
  'click .js-toggle-star'(event, inst) {
    event.preventDefault();
    console.log(this);
    Meteor.call('Bookmarks.toggleStar', this.bookmark._id);
  },
});

Template.Bookmark.helpers({
});