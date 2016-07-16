import { Meteor } from 'meteor/meteor';
import Bookmarks from '../bookmarks';

Meteor.publish('Bookmarks.all', function() {
  if (!this.userId) {
    return this.ready();
  }

  return Bookmarks.find({userId: this.userId});
});

