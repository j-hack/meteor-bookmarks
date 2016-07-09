import { Template } from 'meteor/templating';
import './Bookmarks.html';
import './Bookmark';

Template.Bookmarks.onCreated(function() {
});

Template.Bookmarks.onRendered(function() {
});

Template.Bookmarks.onDestroyed(function() {
});

Template.Bookmarks.events({
  'click .js-select-tab'(event, inst) {
    event.preventDefault();
    const { selectedTab } = Template.instance().data;
    const tab = $(event.target).data('tab');
    selectedTab.set(tab);
  },
});

Template.Bookmarks.helpers({
  isActiveTab(tabName) {
    const { selectedTab } = Template.instance().data;
    return selectedTab.get() === tabName;
  },
});