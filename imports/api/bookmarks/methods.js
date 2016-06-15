import { Meteor } from 'meteor/meteor';
import Bookmarks from './bookmarks';

Meteor.methods({
  'Bookmarks.insert'({uri, title, note}) {
    const doc = {uri, title, note};
    Bookmarks.schema.validate(doc);
    return Bookmarks.insert(doc);
  }
});