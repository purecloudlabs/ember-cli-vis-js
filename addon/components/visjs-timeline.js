/* globals vis*/
import Ember from 'ember';
import layout from '../templates/components/visjs-timeline';

export default Ember.Component.extend({
  layout,
  items: {},
  groups: null,
  options: {},
  timeline: null,

  didInsertElement() {
    this._super(...arguments);

    let container = this.$('.visualization')[0];
    if(this.get('groups')) {
      this.set('timeline', new vis.Timeline(container, this.get('items'), this.get('groups'), this.get('options')));
    } else {
      this.set('timeline', new vis.Timeline(container, this.get('items'), this.get('options')));
    }
  },

  didUpdateAttrs() {
    this._super(...arguments);
    let timeline = this.get('timeline');
    timeline.setItems(this.get('items'));
    timeline.setGroups(this.get('groups'));
    timeline.setOptions(this.get('options'));
  },

  willDestroyElement() {
    this._super(...arguments);
    this.get('timeline').destroy();
  }
});
