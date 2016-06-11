import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './AppLayout.html';
import './AppLayout.css';

import '../components/Bookmarks/Bookmarks';
import '../components/Bookmarks/BookmarkForm';

Template.AppLayout.onCreated(function() {
  console.log(this.data);
});

Template.AppLayout.onRendered(function() {
});

Template.AppLayout.onDestroyed(function() {
});

Template.AppLayout.events({
});

Template.AppLayout.helpers({
});