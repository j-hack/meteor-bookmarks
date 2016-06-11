import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import '../lib/blaze_layout';

import { Template } from 'meteor/templating';
import '../ui/containers/AppContainer';

FlowRouter.route('/', {
  name: 'home',
  action(params, queryParams) {
    console.log("Welcome to Home!");
    BlazeLayout.render('AppContainer');
  }
});

FlowRouter.notFound = {
  action: function() {
    FlowRouter.go('/');
  }
};