import { Template } from 'meteor/templating';
import './Bookmark.html';

Template.Bookmark.onCreated(function() {
});

Template.Bookmark.onRendered(function() {
});

Template.Bookmark.onDestroyed(function() {
});

Template.Bookmark.events({
  'click .js-toggle-star'(event) {
    event.preventDefault();
    Meteor.call('Bookmarks.toggleStar', this.bookmark._id);
  },
  'click .js-remove-bookmark'(event) {
    event.preventDefault();
    const result = confirm('Are you sure?');
    console.log(result);
    if (result) {
      Meteor.call('Bookmarks.remove', this.bookmark._id);
    }
  },
});

Template.Bookmark.helpers({
});