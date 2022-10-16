<template>
  <section class="py-5">
    <b-container>
      <b-row>
        <b-col lg="12">
          <div v-if="!newsItems">Loading...</div>
          <div v-else>
            <h1 class="mb-5 border-bottom">Watch News</h1>
            <nuxt-link to="/search">Search</nuxt-link>
            <br /><br />
            <div
              v-for="(newsItem, index) in newsItems"
              :key="index"
              class="mb-5"
            >
              <news-item :item="newsItem"></news-item>
            </div>
            <infinite-loading
              v-if="newsItems.length"
              spinner="spiral"
              @infinite="infiniteScroll"
            ></infinite-loading>
          </div>
        </b-col>
        <b-col lg="1"></b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'default',
  data() {
    return {
      newsItems: null,
      start: 0,
      limit: 10
    };
  },
  computed: {
    url() {
      return 'https://watchbackend.chintanv.site/newsitems?_start=' + this.start + '&_limit=' + this.limit + '&_sort=pub_date:desc'
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const response = await axios.get(this.url)
      this.newsItems = response.data
    },
    infiniteScroll($state) {
      setTimeout(() => {
        this.start += 10
        axios
          .get(this.url)
          .then((response) => {
            if (response.data.length > 1) {
              response.data.forEach((item) => this.newsItems.push(item))
              $state.loaded()
            } else {
              $state.complete()
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }, 500)
    }
  }
};
</script>
