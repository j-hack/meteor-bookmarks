import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './AppLayout.html';
import '../components/Bookmarks/Bookmarks';

Template.AppLayout.onCreated(function() {
  const { bookmarks } = this.data.store();
  this.bookmarks = bookmarks;
});

Template.AppLayout.onRendered(function() {
});

Template.AppLayout.onDestroyed(function() {
});

Template.AppLayout.events({
});

Template.AppLayout.helpers({
  bookmarks: () => Template.instance().bookmarks,
});