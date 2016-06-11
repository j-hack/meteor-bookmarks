import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { _ } from 'meteor/underscore';

class BookmarksCollection extends Mongo.Collection {
  insert(doc, callback) {
    const ourDoc = doc;

    ourDoc.createdAt = ourDoc.createdAt || new Date();
    ourDoc.updatedAt = ourDoc.updatedAt || ourDoc.createdAt;

    const result = super.insert(ourDoc, callback);
    return result;
  }

  update(selector, modifier) {
    const exModifier = modifier;
    if (_.isObject(exModifier) && exModifier.$set) {
      exModifier.$set.updatedAt = new Date();
    }
    const result = super.update(selector, exModifier);
    return result;
  }
}

const Bookmarks = new BookmarksCollection('bookmarks');

Bookmarks.schema = new SimpleSchema({
  title: {
    type: String,
    defaultValue: '',
  },
  uri: {
    type: String,
  },
  note: {
    type: String,
    optional: true,
    max: 10000,
  },
  createdAt: {
    type: Date,
    denyUpdate: true,
  },
  updatedAt: {
    type: Date,
  }
});

Bookmarks.attachSchema(Bookmarks.schema);

export default Bookmarks;