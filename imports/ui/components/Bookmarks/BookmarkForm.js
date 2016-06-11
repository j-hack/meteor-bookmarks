import { Template } from 'meteor/templating';
import './BookmarkForm.html';
import './BookmarkForm.css';

Template.BookmarkForm.onCreated(function() {
  console.log(this.data);
  this.props = this.data.props;
});

Template.BookmarkForm.onRendered(function() {
});

Template.BookmarkForm.onDestroyed(function() {
});

Template.BookmarkForm.events({
  'submit .js-bookmark-form'(event, inst) {
    inst.props.onSubmitBookmarkForm(event, inst);
  }
});

Template.BookmarkForm.helpers({
});