import { Meteor } from 'meteor/meteor';
import { Bookmarks } from '../../api/collections';
import { _ } from 'meteor/underscore';

Meteor.startup(() => {
  if (Bookmarks.find().count() === 0) {
    const data = [
      {
        title: 'Yahoo! JAPAN',
        url: 'http://www.yahoo.co.jp',
      },
      {
        title: 'Build Apps with JavaScript | Meteor',
        url: 'https://www.meteor.com',
      },
      {
        title: 'ホーム - Qiita',
        url: 'http://qiita.com/',
      },
      {
        title: 'Crater.io: Where Real Time web & mobile dev news lands',
        url: 'https://crater.io/',
      },
      {
        title: 'GitHub',
        url: 'https://github.com/',
      },
      {
        title: 'Hacker News',
        url: 'https://news.ycombinator.com/',
      },
      {
        title: 'Google',
        url: 'https://google.co.jp/',
      },
      {
        title: 'Gmail',
        url: 'https://mail.google.com/',
      },
      {
        title: 'Meteor Blog',
        url: 'http://info.meteor.com/blog',
      },
      {
        title: 'Meteor forums',
        url: 'https://forums.meteor.com/',
      },
    ];
    // _.times(100, (num) => {
    //   data.forEach((doc) => {
    //     const newDoc = Object.assign({}, doc);
    //     newDoc.title = `${doc.title} ${num + 1}`;
    //     Bookmarks.insert(newDoc);
    //   });
    // });
    data.forEach((doc) => {
      Bookmarks.insert(doc);
    });
  }
});