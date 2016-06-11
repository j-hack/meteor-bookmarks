import { Template } from 'meteor/templating';
import './AppContainer.html';
import '../layouts/AppLayout';

import { Bookmarks } from '../../api/collections';

Template.AppContainer.onCreated(function() {
  this.subscribe('bookmarks.all');
});

Template.AppContainer.onRendered(function() {
});

Template.AppContainer.onDestroyed(function() {
});

Template.AppContainer.events({
});

Template.AppContainer.helpers({
  bookmarks: () => Bookmarks.find(),
});