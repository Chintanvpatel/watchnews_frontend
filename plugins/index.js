import Vue from 'vue';
import DOMPurify from 'dompurify';
import InfiniteLoading from 'vue-infinite-loading'
import moment from 'moment'

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('LL')
  }
});

Vue.component('infinite-loading', InfiniteLoading)

Vue.mixin({
  methods: {
    sanitizeHtml(value) {
      return DOMPurify.sanitize(value);
    },
  },
});
