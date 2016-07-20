import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './AppContainer.html';
import '../layouts/AppLayout';

import { Bookmarks } from '../../api/collections';

const selectedTab = new ReactiveVar('All')

const props = {
  selectedTab: selectedTab,
  bookmarks: () => {
    let sel = {}
    if (selectedTab.get() === 'Starred') {
      sel = {starredAt: {$exists: true}};
    }
    return Bookmarks.find(sel, {sort: {createdAt: -1}});
  },
  count: () => Bookmarks.find().count(),
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