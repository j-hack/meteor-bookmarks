import { Meteor } from 'meteor/meteor';
import Bookmarks from './bookmarks';

Meteor.methods({
  'Bookmarks.insert'({url, title}) {
    const doc = {url, title};
    Bookmarks.schema.validate(doc);
    return Bookmarks.insert(doc);
  },
  'Bookmarks.update'(docId, {url, title}) {
    const modifier = {url, title};
    Bookmarks.schema.validate(modifier);
    return Bookmarks.update(docId, { $set: modifier });
  },
  'Bookmarks.remove'(docId) {
    new SimpleSchema({
      docId: {
        type: String,
      }
    }).validate({docId});
    return Bookmarks.remove(docId);
  },
});