/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-visjs-timeline',

  included(parent) {
    this._super.included.apply(this, arguments);

    // Find the top-level app if this is nested within other addons
    while (parent.app) {
      parent = parent.app;
    }

    parent.import(parent.bowerDirectory + '/vis/dist/vis.min.css');
    parent.import(parent.bowerDirectory + '/vis/dist/vis.min.js');
  }


};
