/* globals vis*/
import Ember from 'ember';
import layout from '../templates/components/vis-timeline';

export default Ember.Component.extend({
  layout,
  data: {},
  options: {},
  timeline: null,

  didInsertElement() {
    this._super(...arguments);

    let container = this.$('.visualization')[0];
    this.set('timeline', new vis.Timeline(container, this.get('data'), this.get('options')));
  }
});
