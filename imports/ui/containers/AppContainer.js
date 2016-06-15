import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './AppContainer.html';
import '../layouts/AppLayout';

import { Bookmarks } from '../../api/collections';

const props = {
  onSubmitBookmarkForm(event, inst) {
    event.preventDefault();
    const title = event.target.title.value;
    const uri = event.target.uri.value;
    Meteor.call('Bookmarks.insert', title, uri, (err, res) => {
      console.log(err, res);
      if (!err) {
        event.target.title.value = "";
        event.target.uri.value = "";
      }
    });
  },
  bookmarks: () => Bookmarks.find({}, {sort: {createdAt: -1}}),
  count: () => Bookmarks.find().count(),
};

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
  props,
  isReady: () => Template.instance().subscriptionsReady(),  
});