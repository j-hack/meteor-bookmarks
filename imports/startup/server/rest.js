import { Restivus } from 'meteor/nimble:restivus';
import { Bookmarks } from '../../api/collections';

console.log(Restivus);

// Global API Configuration
const Api = new Restivus({
  useDefaultAuth: true,
  prettyJson: true
});

Api.addCollection(Bookmarks);