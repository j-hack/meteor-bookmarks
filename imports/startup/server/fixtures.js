import { Meteor } from 'meteor/meteor';
import { Bookmarks } from '../../api/collections';
import { _ } from 'meteor/underscore';

Meteor.startup(() => {
  if (Bookmarks.find().count() === 0) {
    const data = [
      {
        title: 'Yahoo! JAPAN',
        uri: 'http://www.yahoo.co.jp',
      },
      {
        title: 'Build Apps with JavaScript | Meteor',
        uri: 'https://www.meteor.com',
      },
      {
        title: 'ホーム - Qiita',
        uri: 'http://qiita.com/',
      },
      {
        title: 'Crater.io: Where Real Time web & mobile dev news lands',
        uri: 'https://crater.io/',
      },
      {
        title: 'GitHub',
        uri: 'https://github.com/'
      },
    ];
    _.times(1000, (num) => {
      data.forEach((doc) => {
        doc.title = `doc.title ${num + 1}`;
        Bookmarks.insert(doc);
      });
    });
  }
});