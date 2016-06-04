import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './AppLayout.html';
import '../components/Bookmarks/Bookmarks';

import Collections from '../../api/collections';

Template.AppLayout.onCreated(function() {
  this.subscribe('bookmarks.all');
  console.log(Collections.Bookmarks);
});

Template.AppLayout.onRendered(function() {
});

Template.AppLayout.onDestroyed(function() {
});

Template.AppLayout.events({
});

Template.AppLayout.helpers({
  bookmarks: () => Collections.Bookmarks.find(),
});