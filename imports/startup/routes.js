import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import '../lib/blaze_layout';

import { Template } from 'meteor/templating';
import '../ui/containers/AppContainer';
import '../ui/layouts/AppLayout';

FlowRouter.route('/', {
  name: 'home',
  action(params, queryParams) {
    console.log("Welcome to Home!");
    BlazeLayout.render('AppLayout', { main: 'AppLayout' });
  }
});