import { Meteor } from 'meteor/meteor';
import Bookmarks from './bookmarks';

Meteor.methods({
  'Bookmarks.insert'(title, uri) {
    return Bookmarks.insert({title, uri});
  }
});