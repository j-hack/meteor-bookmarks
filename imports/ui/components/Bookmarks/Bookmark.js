import { Template } from 'meteor/templating';
import './Bookmark.html';

Template.Bookmark.onCreated(function() {
  this.editMode = new ReactiveVar(false);

  this.toggleEdit = () => {
    console.log(`editMode: ${this.editMode.get()}`);
    this.editMode.set(!this.editMode.get());
  };
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
  'click .js-toggle-edit'(event, inst) {
    event.preventDefault();
    inst.toggleEdit();
  }
});

Template.Bookmark.helpers({
  editMode: () => Template.instance().editMode.get(),
  toggleEdit: () => Template.instance().toggleEdit,
});