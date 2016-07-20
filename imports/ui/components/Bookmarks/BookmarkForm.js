import { Template } from 'meteor/templating';
import './BookmarkForm.html';

Template.BookmarkForm.onCreated(function() {
  console.log(this.data);
  this.props = this.data.props;
});

Template.BookmarkForm.onRendered(function() {
});

Template.BookmarkForm.onDestroyed(function() {
});

Template.BookmarkForm.events({
  'submit .js-bookmark-form'(event, inst) {
    event.preventDefault();

    const _id = event.target._id && event.target._id.value;

    const title = event.target.title.value;
    const url = event.target.url.value;
    const newDoc = {_id, title, url};

    const method = _id ? 'Bookmarks.update' : 'Bookmarks.insert';
    if (!_id) {
      delete newDoc._id;
    }

    Meteor.call(method, newDoc, (err, res) => {
      if (err) { console.error(err); return; }

      if (_id) {
        inst.data.toggleEdit();
      } else {
        event.target.title.value = "";
        event.target.url.value = "";
      }
    });
  },
  'blur .js-fetch-title'(event, inst) {
    const url = event.target.value;
    const $target = inst.$('[name=title]');
    if (!url || !$target || $target.val()) { return; }

    const $control = $target.parent();
    $control.addClass('is-loading');

    Meteor.call('Bookmarks.fetchTitle', url, (err, title) => {
      $control.removeClass('is-loading');
      if (err) { console.error(err); return; }
      if ($target.val()) { return; }
      $target.val(title);
    });
  },
  'click .js-cancel-edit'(event, inst) {
    event.preventDefault();
    const {toggleEdit} = inst.data;
    if (_.isFunction(toggleEdit)) {
      toggleEdit();
    }
  }
});

Template.BookmarkForm.helpers({
});