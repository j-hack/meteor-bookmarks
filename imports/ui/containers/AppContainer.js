import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './AppContainer.html';
import '../layouts/AppLayout';

import { Bookmarks } from '../../api/collections';

const selectedTab = new ReactiveVar('All')

const props = {
  selectedTab: selectedTab,
  onSubmitBookmarkForm(event, inst) {
    event.preventDefault();
    const title = event.target.title.value;
    const url = event.target.url.value;
    const newDoc = {title, url};
    Meteor.call('Bookmarks.insert', newDoc, (err, res) => {
      console.log(err, res);
      if (!err) {
        event.target.title.value = "";
        event.target.url.value = "";
      }
    });
  },
  bookmarks: () => {
    let sel = {}
    if (selectedTab.get() === 'Starred') {
      sel = {starredAt: {$exists: true}};
    }
    return Bookmarks.find(sel, {sort: {createdAt: -1}});
  },
  count: () => Bookmarks.find().count(),
  fetchTitle(url, callback) {
    Meteor.call('Bookmarks.fetchTitle', url, (err, title) => {
      if (_.isFunction(callback)) {
        callback(err, title);
      }
    });
  },
};

Template.AppContainer.onCreated(function() {
  this.subscribe('Bookmarks.all');
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