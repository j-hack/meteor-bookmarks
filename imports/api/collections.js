import _Bookmarks from './bookmarks/bookmarks';

export const Bookmarks = _Bookmarks;

if (Meteor.isDevelopment) {
  const Collections = {
    Bookmarks,
  };

  global.Collections = Collections;
}