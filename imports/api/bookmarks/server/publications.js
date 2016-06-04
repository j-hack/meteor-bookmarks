import { Meteor } from 'meteor/meteor';
import Bookmarks from '../bookmarks';

Meteor.publish('bookmarks.all', function() {
  return Bookmarks.find();
});