import { Meteor } from 'meteor/meteor';
import Bookmarks from './bookmarks';

Meteor.methods({
  'Bookmarks.insert'({url, title}) {
    if (!this.userId) {
      new Meteor.Error('Please Sign in to insert bookmark.');
    }
    const doc = {url, title, userId: this.userId};
    Bookmarks.schema.validate(doc);
    return Bookmarks.insert(doc);
  },
  'Bookmarks.update'(docId, {url, title}) {
    const modifier = {url, title};
    Bookmarks.schema.validate(modifier);
    return Bookmarks.update(docId, { $set: modifier });
  },
  'Bookmarks.toggleStar'(docId) {
    const bookmark = Bookmarks.findOne(docId);
    if (!bookmark) { throw new Meteor.Error('Bookmark not found'); }
    let modifier = bookmark.starredAt ?
      { $unset: { starredAt: "" }} :
      { $set: { starredAt: new Date() }};
    return Bookmarks.update(docId, modifier);
  },
  'Bookmarks.remove'(docId) {
    new SimpleSchema({
      docId: {
        type: String,
      }
    }).validate({docId});
    return Bookmarks.remove(docId);
  },
  'Bookmarks.fetchTitle'(url) {
    new SimpleSchema({
      url: {
        type: String,
        regEx: /^https?:\/\//
      },
    }).validate({url});


    const res = HTTP.get(url);

    if (res.statusCode !== 200) { throw new Meteor.Error(res.statusCode) }

    const title = res.content.match(/<title[^>]*>([^<]+)<\/title>/)[1];

    return title;
  },
});