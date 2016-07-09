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
    inst.props.onSubmitBookmarkForm(event, inst);
  },
  'blur .js-fetch-title'(event, inst) {
    const {fetchTitle} = inst.props;
    const url = event.target.value;
    const $target = inst.$('[name=title]');
    if (!url || !$target || $target.val()) { return; }

    const $control = $target.parent();
    $control.addClass('is-loading');
    fetchTitle(url, (err, title) => {
      $control.removeClass('is-loading');
      console.log(err, title);
      if (err) { console.error(err); return; }
      if ($target.val()) { return; }
      $target.val(title);
    });
  },
});

Template.BookmarkForm.helpers({
});