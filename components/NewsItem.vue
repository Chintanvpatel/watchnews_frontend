<template>
  <div class="feed post">
  <div class="feed-image u-placeholder rectangle"><img class="u-object-fit" :src="item.image_url" loading="lazy"></div>
  <div class="feed-wrapper">
    <b-badge v-if="item.sponsored" variant="info" class="mb-2">
      Sponsored
    </b-badge>
    <a :href="item.link" target="_blank" class="text-dark">
      <h2 class="h4 feed-title">{{ item.title }}</h2>
    </a>
    <p
      class="mb-1 one-liner text-muted feed-excerpt"
      v-html="sanitizeHtml(item.preview)"
    ></p>
    <p
      class="mb-1 one-liner text-muted"
    >{{ item.pub_date | formatDate }}</p>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
