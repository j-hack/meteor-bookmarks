import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import '../lib/blaze_layout';

import { Template } from 'meteor/templating';
import '../ui/containers/AppContainer';
import '../ui/layouts/AppLayout';

const data = {
  bookmarks: [
    {_id: 1, title: 'bookmark 1'},
    {_id: 2, title: 'bookmark 2'},
    {_id: 3, title: 'bookmark 3'},
    {_id: 4, title: 'bookmark 5'},
    {_id: 5, title: 'bookmark 6'},
  ],
};

FlowRouter.route('/', {
  name: 'home',
  action(params, queryParams) {
    console.log("Welcome to Home!");
    BlazeLayout.render('AppLayout', { main: 'AppLayout', store: data });
  }
});