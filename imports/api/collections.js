import Bookmarks from './bookmarks/bookmarks';

const Collections = {
  Bookmarks,
};

export default Collections;

if (Meteor.isDevelopment) {
  global.Collections = Collections;
}